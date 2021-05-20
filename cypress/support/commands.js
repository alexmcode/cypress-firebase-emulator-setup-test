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

const auth = firebase.auth();
const firestore = firebase.firestore();
const functions = firebase.functions();

auth.useEmulator("http://localhost:9099");
firestore.useEmulator("localhost", 8080);
functions.useEmulator("localhost", 5001);

Cypress.Commands.add("getToken", (email, password) => {
  return auth.signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    return userCredential.user?.getIdToken()
  }).catch((err) => console.log(err))
})

Cypress.Commands.add("login", (email, password) => {
  cy.getToken(email, password).then((idToken) => {
    if (idToken) {
      cy.request({
        method: "POST",
        url: "localhost:5001/coastline-local/us-central1/createSessionCookie",
        body: {
          idToken,
        }
      }).then((resp) => {
        cy.setCookie("session", resp.body.result)
      })
    }
  })
})