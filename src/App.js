import "./App.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import styled from 'styled-components'

const signOut = () => auth.signOut();

const FirebaseUI = styled(StyledFirebaseAuth)`
  form {
    display: flex;
    flex-direction: column;
  }
`

const firebaseAuthConfig = {
  signInFlow: "popup",
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false,
    },
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
  signInSuccessUrl: "/",
  credentialHelper: "none",
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
}

const SignIn = () => (
  <main>
    <FirebaseUI
      uiConfig={firebaseAuthConfig}
      firebaseAuth={auth}
    />
  </main>
);

const Content = () => (
  <>
  <header>
    <button onClick={signOut}>Sign Out</button>
  </header>
  <main>
    USER IS LOGGED IN
  </main>
  </>
)

const App = () => {
  const [user] = useAuthState(auth);

  return user ? <Content /> : <SignIn />;
};

export default App;
