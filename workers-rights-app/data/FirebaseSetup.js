import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import firebaseConfig from "../constants/MyApiKeys";

export const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth()