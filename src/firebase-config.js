import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjnuIWzoOsaYKCfbwtOszg6hm6mK50qqM",
  authDomain: "bytecode-deathwish-prepa.firebaseapp.com",
  projectId: "bytecode-deathwish-prepa",
  storageBucket: "bytecode-deathwish-prepa.appspot.com",
  messagingSenderId: "78574191000",
  appId: "1:78574191000:web:49bd12a6a8127dbcbeabed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);