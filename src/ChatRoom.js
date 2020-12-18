import React, {useState} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore'
import {useCollectionData} from 'react-firebase-hooks/firestore'

const firestore = firebase.firestore();


function ChatRoom () {
const messagesRef = firestore.collection('messages');
const query = messagesRef.orderBy('createdAt').limit(25);

const [messages] = useCollectionData(query, {idField:'id'});

    return(
        <div>
            <div>
                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}/>)}
            </div>
            <div></div>
        </div>
    )
}

function ChatMessage ({message}) {

const {text, uid } = message;

    return (
        <h1>
            {text}
        </h1>
    )
}

export default ChatRoom;

