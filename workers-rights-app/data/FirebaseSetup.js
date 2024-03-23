import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import firebaseConfig from "../constants/MyApiKeys";

const app = firebase.initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const appAuth = getAuth(app);
const db = getFirestore();

export { auth, appAuth, db };
