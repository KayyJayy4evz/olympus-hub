/*
  Olympus hub settings.
  The Firebase web config is safe to publish: it only identifies the project.
  What protects your data is the Firestore rule in firestore.rules, which
  only lets allowedEmail read or write.
*/
window.OLYMPUS_CONFIG = {
  allowedEmail: "khayla.mcgowan@customink.com",
  firebase: {
    apiKey: "PASTE_API_KEY",
    authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
    projectId: "PASTE_PROJECT_ID",
    storageBucket: "PASTE_PROJECT_ID.appspot.com",
    messagingSenderId: "PASTE_SENDER_ID",
    appId: "PASTE_APP_ID"
  }
};
