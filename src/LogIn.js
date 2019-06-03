import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import './App.css';
import File from './File'

const firebaseApp = firebase.initializeApp(firebaseConfig);

class LogIn extends Component {
  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;

    return (
      <div className="App">

<header className="App-header">
    <h1 float="right">Cube<img src="https://unixtitan.net/images/cube-transparent-isometric.png" alt="logo" width="70" height="70" />Cash</h1>
</header>
          {
            user
              ? <p>Hello, {user.displayName}<File/></p>
              : <p>Please sign in.</p>
          }

          {
            user
              ? <button onClick={signOut} className="buttonLog">Sign out</button>
              : <button onClick={signInWithGoogle} className="buttonLog">Sign in with Google</button>
          }

      </div>
    );
  }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(LogIn);