// firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth"; // ✅ correctly imported

const firebaseConfig = {
  apiKey: "AIzaSyAdTqdJJOKnc0q8iKBQWYIqA3Hwh9cVwd0",
  authDomain: "to-do-task-97024.firebaseapp.com",
  projectId: "to-do-task-97024",
  storageBucket: "to-do-task-97024.appspot.com", // ✅ fixed typo here (was .firebasestorage.app ❌)
  messagingSenderId: "694918007330",
  appId: "1:694918007330:web:5ad6c1bc4f3f97c56c587b",
  measurementId: "G-83DGJ09HGC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
