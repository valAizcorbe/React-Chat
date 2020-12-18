import React, {useState} from 'react';
import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
import {useCollectionData} from 'react-firebase-hooks/firestore'



firebase.initializeApp({
    apiKey: "AIzaSyCewdiWKD4OqM4P78yh0F6QUDKg26TJLB4",
    authDomain: "chat-658f1.firebaseapp.com",
    projectId: "chat-658f1",
    storageBucket: "chat-658f1.appspot.com",
    messagingSenderId: "734270965247",
    appId: "1:734270965247:web:4b2ca555364f21a0dc93ca",
    measurementId: "G-LG9CZ82LN6"
  })

  const auth = firebase.auth();
const firestore = firebase.firestore();

function SignIn () {

const authGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
    
}

    return(
        <div>
            <button onClick={authGoogle}>Sign In with Google</button>
        </div>
    )
}

export default SignIn;
