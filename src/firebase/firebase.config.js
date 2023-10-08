// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {GoogleAuthProvider} from "firebase/auth"; // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCULUG2cqzCu_5cEenxEnSdFkgMX56p8GM",
  authDomain: "luxe-lunar.firebaseapp.com",
  projectId: "luxe-lunar",
  storageBucket: "luxe-lunar.appspot.com",
  messagingSenderId: "684545119469",
  appId: "1:684545119469:web:c7ef96f08c0bc679d0a8e4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
