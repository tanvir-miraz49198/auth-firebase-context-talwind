// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9D4ffWYe0dBxeZmPDTHI2PRF2gPX4WIw",
  authDomain: "auth-firebase-context-ta-d99aa.firebaseapp.com",
  projectId: "auth-firebase-context-ta-d99aa",
  storageBucket: "auth-firebase-context-ta-d99aa.appspot.com",
  messagingSenderId: "526877776554",
  appId: "1:526877776554:web:e9ffb30f2a815b462b4ed3",
  measurementId: "G-VXXW4HF29P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app