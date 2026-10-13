/*
  Shared helpers for the calendar functions.

  Security model:
  - Every call from the page carries a Firebase ID token. We verify it against
    Google's public keys and only accept the one allowed, verified email.
  - The Google refresh token lives in Netlify Blobs (server side only). The page
    only ever receives short-lived access tokens.
  - GOOGLE_CLIENT_SECRET is a Netlify environment variable, never in the repo.
*/
import { createRemoteJWKSet, jwtVerify } from "jose";
import { getStore } from "@netlify/blobs";

export const PROJECT_ID = "olympus-hub-d7a51";
export const ALLOWED_EMAIL = "khayla.mcgowan@customink.com";
export const SCOPE = "https://www.googleapis.com/auth/calendar.events";

const JWKS = createRemoteJWKSet(
  new URL("https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com")
);

export const json = (status, body) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });

export function oauthConfig() {
  const id = process.env.GOOGLE_CLIENT_ID || "";
  const secret = process.env.GOOGLE_CLIENT_SECRET || "";
  return { id, secret, ready: !!(id && secret) };
}

export function siteOrigin(req) {
  const u = new URL(req.url);
  return `${u.protocol}//${u.host}`;
}

export const redirectUri = (req) => siteOrigin(req) + "/api/gcal/callback";

/* Returns the verified email, or null. */
export async function verifyUser(req) {
  const h = req.headers.get("authorization") || "";
  const tok = h.startsWith("Bearer ") ? h.slice(7) : "";
  if (!tok) return null;
  try {
    const { payload } = await jwtVerify(tok, JWKS, {
      issuer: `https://securetoken.google.com/${PROJECT_ID}`,
      audience: PROJECT_ID,
    });
    const email = String(payload.email || "").toLowerCase();
    if (payload.email_verified !== true || email !== ALLOWED_EMAIL) return null;
    return email;
  } catch {
    return null;
  }
}

export const store = () => getStore({ name: "olympus-gcal", consistency: "strong" });
export const rtKey = (email) => "rt:" + email;
