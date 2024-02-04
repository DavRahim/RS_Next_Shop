// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_apiKey,
  authDomain: process.env.NEXT_PUBLIC_authDomain,
  projectId: process.env.NEXT_PUBLIC_projectId,
  storageBucket: process.env.NEXT_PUBLIC_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_appId,
  measurementId: process.env.NEXT_PUBLIC_measurementId,
//   apiKey: "AIzaSyC2Z7aH1HsK3qRyiVH3_oRQVWBIUFREBDI",
//   authDomain: "rs-shoping-a7277.firebaseapp.com",
//   projectId: "rs-shoping-a7277",
//   storageBucket: "rs-shoping-a7277.appspot.com",
//   messagingSenderId: "409768972670",
//   appId: "1:409768972670:web:d73f579c89b51c56b3232f",
//   measurementId: "G-T56FBKJS5E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app
