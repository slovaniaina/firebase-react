import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBAilmavM4u0Gq5MK2Xcmbu_eew769gxxA",
  authDomain: "fir-react-897c7.firebaseapp.com",
  projectId: "fir-react-897c7",
  storageBucket: "fir-react-897c7.appspot.com",
  messagingSenderId: "96979388523",
  appId: "1:96979388523:web:4662ab25828d0836fa092e",
  measurementId: "G-9FJGV1B56B"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);