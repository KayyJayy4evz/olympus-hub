/* POST /api/gcal/start  ->  { url } for Google's consent screen (offline access, one time). */
import { oauthConfig, json, redirectUri, store, verifyUser, SCOPE, ALLOWED_EMAIL } from "../lib/shared.js";

export default async (req) => {
  if (req.method !== "POST") return json(405, { error: "method" });
  const cfg = oauthConfig();
  if (!cfg.ready) return json(503, { error: "not_configured" });
  const email = await verifyUser(req);
  if (!email) return json(401, { error: "unauthorized" });

  const state = crypto.randomUUID();
  await store().setJSON("state:" + state, { email, exp: Date.now() + 10 * 60 * 1000 });

  const q = new URLSearchParams({
    client_id: cfg.id,
    redirect_uri: redirectUri(req),
    response_type: "code",
    scope: SCOPE,
    access_type: "offline",
    prompt: "consent",
    include_granted_scopes: "true",
    login_hint: ALLOWED_EMAIL,
    state,
  });
  return json(200, { url: "https://accounts.google.com/o/oauth2/v2/auth?" + q.toString() });
};

export const config = { path: "/api/gcal/start" };
