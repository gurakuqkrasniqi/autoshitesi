import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAP8AF8Ig-DBFE50PMRO5SW2dxk82te4Kc",
  authDomain: "autoproject-edb62.firebaseapp.com",
  projectId: "autoproject-edb62",
  storageBucket: "autoproject-edb62.appspot.com",
  messagingSenderId: "540829551768",
  appId: "1:540829551768:web:07339079a9a75726b7d4ed",
  measurementId: "G-B3J5FPMXSG",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const clientsRef = collection(db, "clients");
export default clientsRef;
