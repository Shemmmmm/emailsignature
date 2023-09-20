// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NODE_ENV.API_KEY,
  authDomain: process.env.NODE_ENV.AUTH_DOMAIN,
  projectId: process.env.NODE_ENV.PROJECT_ID,
  storageBucket: process.env.NODE_ENV.STORAGE_BUCKET,
  messagingSenderId: process.env.NODE_ENV.MESSAGING_SENDER_ID,
  appId: process.env.NODE_ENV.APP_ID,
  measurementId: process.env.NODE_ENV.MEASUREMENT_ID  
};

              // Initialize Firebase
              const app = initializeApp(firebaseConfig);
               const storage = getStorage(app);
              // const analytics = getAnalytics(app)
            export default storage;