/*
  Olympus hub settings.
  The Firebase web config is safe to publish: it only identifies the project.
  What protects your data is the Firestore rule in firestore.rules, which
  only lets allowedEmail read or write.
*/
window.OLYMPUS_CONFIG = {
  allowedEmail: "khayla.mcgowan@customink.com",
  // PL / UPL entries on this calendar ("Name - PL", "Name : UPL", "Name PL") mark people out in the hub.
  teamCalendarId: "c_53f5c72edfbe6cb89eb9fc5bde7521867ffd672dfac9e3e17cc287b6d092e861@group.calendar.google.com",
  firebase: {
    apiKey: "AIzaSyBrfH_zAqSRKC-Akl43k6Qab8-p7ku4cD8",
    authDomain: (location.hostname === "localhost" ? "olympus-hub-d7a51.firebaseapp.com" : location.hostname),
    projectId: "olympus-hub-d7a51",
    storageBucket: "olympus-hub-d7a51.firebasestorage.app",
    messagingSenderId: "847979797557",
    appId: "1:847979797557:web:e4a4539b951de8e745257c",
    measurementId: "G-3YBSY2M3XD"
  }
};
