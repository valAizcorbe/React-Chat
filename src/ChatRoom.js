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
        </div>
    )
}

function ChatMessage (props) {
const {text, id } = props.message;

    return (
        <p>
{text}
        </p>
    )
}

export default ChatRoom;

