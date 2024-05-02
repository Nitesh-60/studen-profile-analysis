// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_pDSbHDEh5ZO39onJMJRJwISgOr-PyfM",
  authDomain: "student-profile-analysis.firebaseapp.com",
  projectId: "student-profile-analysis",
  storageBucket: "student-profile-analysis.appspot.com",
  messagingSenderId: "1008993465248",
  appId: "1:1008993465248:web:671ffbc20fd717e1e2eac5",
  measurementId: "G-GXJ3WD3V4M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();