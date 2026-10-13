/* GET /api/gcal/callback?code&state  ->  stores the refresh token, sends you back to the hub. */
import { oauthConfig, redirectUri, siteOrigin, store, rtKey } from "../lib/shared.js";

const back = (req, status) =>
  new Response(null, { status: 302, headers: { location: `${siteOrigin(req)}/?cal=${status}#agora`, "cache-control": "no-store" } });

export default async (req) => {
  const u = new URL(req.url);
  const code = u.searchParams.get("code");
  const state = u.searchParams.get("state");
  if (u.searchParams.get("error")) return back(req, "declined");
  if (!code || !state) return back(req, "error");

  const s = store();
  const st = await s.get("state:" + state, { type: "json" });
  await s.delete("state:" + state);
  if (!st || st.exp < Date.now()) return back(req, "expired");

  const cfg = oauthConfig();
  if (!cfg.ready) return back(req, "not_configured");

  const r = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id: cfg.id,
      client_secret: cfg.secret,
      redirect_uri: redirectUri(req),
      grant_type: "authorization_code",
    }),
  });
  const j = await r.json().catch(() => ({}));
  if (!r.ok || !j.refresh_token) return back(req, "error");

  await s.setJSON(rtKey(st.email), { refresh_token: j.refresh_token, savedAt: Date.now() });
  return back(req, "connected");
};

export const config = { path: "/api/gcal/callback" };
