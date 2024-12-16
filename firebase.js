// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5Z9EVtHVkOcJfrlu4b2ymXWSeJxq7NIc",
  authDomain: "meerasight-acf91.firebaseapp.com",
  projectId: "meerasight-acf91",
  storageBucket: "meerasight-acf91.firebasestorage.app",
  messagingSenderId: "625367722543",
  appId: "1:625367722543:web:bf94bdea201d35fdb674da",
  measurementId: "G-G73F5GJVB0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
