// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NODE_ENV.API_KEY
,
    authDomain: process.env.NODE_ENV.AUTH_DOMAIN,
      projectId: "fir-c5188",
        storageBucket: "fir-c5188.appspot.com",
          messagingSenderId: "731791091956",
            appId: "1:731791091956:web:7f73fbec8afe8e164a16a1",
              measurementId: "G-6BZ36TDLL2"
              };

              // Initialize Firebase
              const app = initializeApp(firebaseConfig);
               const storage = getStorage(app);
              // const analytics = getAnalytics(app)
            export default storage;