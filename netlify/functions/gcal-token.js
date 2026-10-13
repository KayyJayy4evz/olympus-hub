/* POST /api/gcal/token  ->  { access_token, expires_in } from the stored refresh token.
   DELETE /api/gcal/token ->  forgets the stored refresh token (disconnect). */
import { oauthConfig, json, store, rtKey, verifyUser } from "../lib/shared.js";

export default async (req) => {
  const cfg = oauthConfig();
  if (!cfg.ready) return json(503, { error: "not_configured" });
  const email = await verifyUser(req);
  if (!email) return json(401, { error: "unauthorized" });
  const s = store();

  if (req.method === "DELETE") {
    await s.delete(rtKey(email));
    return json(200, { ok: true });
  }
  if (req.method !== "POST") return json(405, { error: "method" });

  const saved = await s.get(rtKey(email), { type: "json" });
  if (!saved || !saved.refresh_token) return json(404, { error: "not_connected" });

  const r = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: cfg.id,
      client_secret: cfg.secret,
      refresh_token: saved.refresh_token,
      grant_type: "refresh_token",
    }),
  });
  const j = await r.json().catch(() => ({}));
  if (!r.ok) {
    if (j.error === "invalid_grant") {
      await s.delete(rtKey(email));
      return json(404, { error: "not_connected", reason: "expired_or_revoked" });
    }
    return json(502, { error: "google_error" });
  }
  return json(200, { access_token: j.access_token, expires_in: j.expires_in || 3600 });
};

export const config = { path: "/api/gcal/token" };
