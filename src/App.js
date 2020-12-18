import React from 'react';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/auth'
// import 'firebase/firestore'
import SignIn from './SignIn'
import ChatRoom from './ChatRoom'

import {useAuthState} from 'react-firebase-hooks/auth'

const auth = firebase.auth();

function App() {

  const user = useAuthState(auth)
  return (
    <div className="App">
      <header></header>
      <section>
        {user ? <ChatRoom/> : <SignIn/> }
      </section>
    </div>
  );

}

function SignOut (){
  return auth.currentUser && (
    <button onClick={() => auth.SignOut()}>Sign Out</button>
  )
}

export default App;
