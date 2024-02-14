import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHZ9rYSmLOCq_iM9E_nHLo_oBZnBm1IEM",
  authDomain: "swave-a0e1f.firebaseapp.com",
  projectId: "swave-a0e1f",
  storageBucket: "swave-a0e1f.appspot.com",
  messagingSenderId: "11796127680",
  appId: "1:11796127680:web:0137357b0018f76ea87225",
  measurementId: "G-BT6BE9CX9E"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);