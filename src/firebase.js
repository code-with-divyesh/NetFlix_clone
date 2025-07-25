// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiSjdSwNK_gFrdJRSLehJCiPwlVP1R37s",
  authDomain: "netfilx-clone-ee5b5.firebaseapp.com",
  projectId: "netfilx-clone-ee5b5",
  storageBucket: "netfilx-clone-ee5b5.firebasestorage.app",
  messagingSenderId: "504736653451",
  appId: "1:504736653451:web:5d38fca0a9d10467d7748e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.failed(
      error.code
        .split("/")[1] // remove 'auth/' prefix
        .split("-") // split by hyphens
        .join(" ") // join with spaces
        .replace(/\b\w/g, (c) => c.toUpperCase())
    );
  }
};
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(
      error.code
        .split("/")[1] // remove 'auth/' prefix
        .split("-") // split by hyphens
        .join(" ") // join with spaces
        .replace(/\b\w/g, (c) => c.toUpperCase())
    );
  }
};
const logout = async () => {
  try {
    await signOut(auth);
    toast.success("Signed out successfully");
  } catch (error) {
    console.error("Logout error:", error);
    toast.error("Failed to sign out");
  }
};

export { auth, db, login, signUp, logout };
