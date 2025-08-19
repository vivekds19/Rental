// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: VITE_FIREBASE_API_KEY,
  authDomain: "hrental-dc8b6.firebaseapp.com",
  projectId: "hrental-dc8b6",
  storageBucket: "hrental-dc8b6.firebasestorage.app",
  messagingSenderId: "772460800387",
  appId: "1:772460800387:web:1e8aff99cde7578356eeb6",
  measurementId: "G-ZZ5H21CYSV",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
