// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDG1NiEMyoT078s6g_dGxhG0WYNKjZDAD4",
  authDomain: "la-hacks-7efb2.firebaseapp.com",
  projectId: "la-hacks-7efb2",
  storageBucket: "la-hacks-7efb2.appspot.com",
  messagingSenderId: "1014867585825",
  appId: "1:1014867585825:web:574e2364526cbf5d132c60",
  measurementId: "G-B8K08PRMGH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);