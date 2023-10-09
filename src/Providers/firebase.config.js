// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6Ltstr_8N1gelkFe6x29PHy1m82lp5-A",
  authDomain: "corporate-event-manageme-22150.firebaseapp.com",
  projectId: "corporate-event-manageme-22150",
  storageBucket: "corporate-event-manageme-22150.appspot.com",
  messagingSenderId: "994823874053",
  appId: "1:994823874053:web:6c6b5cd5665bd210131e6c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
