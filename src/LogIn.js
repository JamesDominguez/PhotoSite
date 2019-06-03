import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import './App.css';

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


          {
            user
              ? <p>Hello, {user.displayName}</p>
              
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