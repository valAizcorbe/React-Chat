import React, {useState, useRef} from 'react';
import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import {useAuthState} from 'react-firebase-hooks/auth'
import {Body, Button, Sign, Header, Logo, MessageSection, Footer, Form, Img, Input, Icon, Bubble, Sent, Received, BubbleR, SButton, Chat} from './Style-App'
import {IoMdSend} from 'react-icons/io'


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

function App() {

  const [user] = useAuthState(auth)
  
  return (
    <Body>
     
        {user ? <ChatRoom /> : <SignIn/>}
      
    </Body>
  );

}

function SignIn () {

  const SignInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider)
      
  }
  
      return(
          <Sign>
              <Button onClick={SignInWithGoogle}>Sign In with Google</Button>
          </Sign>
      )
  }


function SignOut (){
let signOut = () => {
  auth.signOut()

}
  return auth.currentUser && (
    <SButton onClick={signOut}>Sign Out</SButton>
  )
}

function ChatRoom () {
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query, {idField: 'id' });
  const [formValue, setFormValue] = useState('')
  const dummy = useRef()
  
  
  const sendMessage = async(e) => {
      e.preventDefault();
      const {uid, photoURL} = auth.currentUser;
      await messagesRef.add({
          text: formValue,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          uid,
          photoURL
      })
  
      setFormValue('')
      dummy.current.scrollIntoView({ behaviour: 'smooth'})
  }
  
  
      return(
          <Chat>
            <Header><Logo>Chat with Vali </Logo><SignOut/></Header>

  <MessageSection>
    
    {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}/>)}<div ref={dummy}></div></MessageSection>

            
              
  <Footer>
    <Form onSubmit={sendMessage}>
          <Input value={formValue} onChange={(e) => setFormValue(e.target.value)}/>
          <Icon><IoMdSend/></Icon>
      </Form>
      </Footer>
              
              
          </Chat>
      )
  }
  
   function ChatMessage (props) {
  
  const {text, uid, photoURL} = props.message;
  const messageClass = uid === auth.currentUser.uid;
  
      return (
          <div>
{
  messageClass ? <Sent><Img src={photoURL}/>   
              <Bubble> {text} </Bubble></Sent> : <Received><Img src={photoURL}/>   
              <BubbleR> {text} </BubbleR></Received>
}
           
  
      </div>
          
      )
  }

export default App;
