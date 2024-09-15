import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDEXcik2DKlQs4GJnunyyOt7KGcZfRv6r4",
  authDomain: "blogging-app-3635b.firebaseapp.com",
  projectId: "blogging-app-3635b",
  storageBucket: "blogging-app-3635b.appspot.com",
  messagingSenderId: "129138910907",
  appId: "1:129138910907:web:e3caaf54f2af5d8c632b9e",
  measurementId: "G-SM636PB200"
};

// Initialize Firebase only if it hasn't been initialized
if (!getApps().length) {
  initializeApp(firebaseConfig);
} else {
  getApp(); // If already initialized, get the default app
}

const provider = new GoogleAuthProvider();
const auth = getAuth();
const db = getFirestore();

export { auth, provider, db };
