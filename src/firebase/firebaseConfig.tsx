import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAtD0QX_w1yOrNySoej2sLjqzZXuQXzFhY",
  authDomain: "gift-shop-dcc6e.firebaseapp.com",
  projectId: "gift-shop-dcc6e",
  storageBucket: "gift-shop-dcc6e.appspot.com",
  messagingSenderId: "740690143316",
  appId: "1:740690143316:web:da6761152e8aa2f299e5c1",
  measurementId: "G-YDQYQ1HZNV"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const auth = getAuth(app);
export { db };