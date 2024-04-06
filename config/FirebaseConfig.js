// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "meeting-scheduler-47df6.firebaseapp.com",
  projectId: "meeting-scheduler-47df6",
  storageBucket: "meeting-scheduler-47df6.appspot.com",
  messagingSenderId: "340452860999",
  appId: "1:340452860999:web:e2ba836e2b96af00823d62",
  measurementId: "G-YKRG6TC8E6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);