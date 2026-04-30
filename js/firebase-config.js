// ─────────────────────────────────────────────────────────────
// Clearpath Site Consulting — Firebase Configuration
// Project: sfs-scheduler (shared with SFS Crew Scheduler)
//
// The scheduler uses Realtime Database (/sched, /sched-dev).
// This site uses Firestore → clearpath_inquiries collection.
// No data overlap between the two apps.
//
// FIRST-TIME FIRESTORE SETUP (one time only):
// 1. Go to console.firebase.google.com → sfs-scheduler project
// 2. Build → Firestore Database → Create database
//    - Start in Production mode  |  Region: us-central1
// 3. Set Security Rules:
//
//    rules_version = '2';
//    service cloud.firestore {
//      match /databases/{database}/documents {
//        match /clearpath_inquiries/{doc} {
//          allow create: if true;
//          allow read, update, delete: if false;
//        }
//      }
//    }
//
// View submissions:
//   Firebase Console → Firestore Database → clearpath_inquiries
// ─────────────────────────────────────────────────────────────

const firebaseConfig = {
  apiKey:            "AIzaSyCMMBFQEHTHnI4fxU_0C11kCkTaLDBJEJs",
  authDomain:        "sfs-scheduler.firebaseapp.com",
  projectId:         "sfs-scheduler",
  storageBucket:     "sfs-scheduler.firebasestorage.app",
  messagingSenderId: "183656336505",
  appId:             "1:183656336505:web:48ec0547091636ab5158a8"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const INQUIRIES = 'clearpath_inquiries';
