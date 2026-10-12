# Olympus Leadership Hub

Khayla's managerial hub for Team Olympus (Tier 2, Partner org): Today, Meetings, Tasks, Schedules, Team, and Metrics.

- **Hosting:** Netlify, auto-deploys on every push to `main`.
- **Data and sign-in:** Firebase (Firestore + Google sign-in), locked to one account.
- **Calendar:** Google Calendar API, using the same Google sign-in.

No build step. `index.html`, `app.js`, and `config.js` are the whole site.

## One-time setup

### 1. Firebase project
1. Go to console.firebase.google.com and choose **Add project** (name it `olympus-hub`). Analytics is optional.
2. **Build, Authentication, Get started, Sign-in method:** enable **Google**.
3. **Build, Firestore Database, Create database:** production mode, region `us-east1`.
4. **Firestore, Rules:** paste the contents of `firestore.rules` and **Publish**.
5. **Project settings (gear), General, Your apps:** add a **Web app**. Copy the `firebaseConfig` values into `config.js`.

### 2. Google Calendar access (same project)
1. Open console.cloud.google.com and select the `olympus-hub` project.
2. **APIs & Services, Library:** enable **Google Calendar API**.
3. **APIs & Services, OAuth consent screen:** User type **External**, publishing status **Testing**. Add `khayla.mcgowan@customink.com` under **Test users**. Add the scope `.../auth/calendar.events`.

### 3. Netlify
1. app.netlify.com, **Add new site, Import an existing project, GitHub**, pick this repo.
2. Leave build command empty, publish directory `.`, deploy.
3. Copy the site URL (for example `olympus-hub.netlify.app`).
4. Back in Firebase: **Authentication, Settings, Authorized domains, Add domain:** paste the Netlify domain.

### 4. First sign-in
Open the site, sign in with your Custom Ink account, then on **Summit, Hub tools** import `olympus-hub-data.json` to load the roster and shifts.

## If sign-in says "This app is blocked"
That is Custom Ink's Google Workspace admin policy. Ask IT to allow the OAuth client for this project, or run the hub without the live calendar.

## Notes
- The calendar connection lasts about an hour per sign-in (a Google limit for browser-only apps). When it lapses, the hub shows **Connect calendar**; one click renews it.
- `firestore.rules` is the security boundary. Keep the email in it matching `allowedEmail` in `config.js`.
