
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARAAzY3OK_J-n85Hv9llnBlBHeK0PJbTk",
  authDomain: "sample-24ab1.firebaseapp.com",
  projectId: "sample-24ab1",
  storageBucket: "sample-24ab1.appspot.com",
  messagingSenderId: "222267101465",
  appId: "1:222267101465:web:5e3bfb6f94ec6a641eb588"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export { auth, provider };
