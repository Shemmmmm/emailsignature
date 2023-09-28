// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCIrzecpsL2JRazK3Bu48UaknoC2MnPLkY",
  authDomain: "fir-86107.firebaseapp.com",
  projectId: "fir-86107",
  storageBucket: "fir-86107.appspot.com",
  messagingSenderId: "1054485035996",
  appId: "1:1054485035996:web:91d8b3aadacf47fecfad19",
  measurementId: "G-G5WSE0V1B9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const store = app(firestore);
export default store;