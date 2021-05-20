import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";

const firebaseCoastlineLocalConfig = {
  apiKey: "AIzaSyAU_OV1ITYUubqzl1I_PfDJ6zwjyWRkNus",
  authDomain: "coastline-local.firebaseapp.com",
  projectId: "coastline-local",
  storageBucket: "coastline-local.appspot.com",
  messagingSenderId: "71132507742",
  appId: "1:71132507742:web:364c0cc517c4e9b3c4cecf",
}

firebase.initializeApp(firebaseCoastlineLocalConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const functions = firebase.functions();

if (window.location.hostname.includes("localhost")) {
  auth.useEmulator("http://localhost:9099");
  firestore.useEmulator("localhost", 8080);
  functions.useEmulator("localhost", 5001);
}

export default firebase;
