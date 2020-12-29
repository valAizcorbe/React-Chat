import styled from 'styled-components'

export const Body = styled.div`
height: 100vh;
width: 100vw;
position: relative;
`
export const Button = styled.button`
height: 60px;
width: 180px;
border: none;
border-radius: 10px;
background-color: #f0ebd8;
color: #3e5c76;
font-size: large;
`

export const Sign = styled.body`
background-color: #1d2d44;
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
`

export const Header = styled.header`
display: flex;
justify-content: space-around;
align-items: center;
background-color: #0d1321;
position: fixed;
width: 100%;
z-index:2;
margin-top: -62px;
`

export const Logo = styled.h3`
color: #f0ebd8;
`
export const Chat = styled.div`
height: 100%;
width: 100%;
`

export const MessageSection = styled.body`
background-color: #1d2d44;
height: 100%;
position: relative;
overflow-y: scroll;
margin-top: 60px;
`

export const Form = styled.form`
height: 100%;
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;

`

export const Footer = styled.footer`
display: flex;
justify-content: space-around;
align-items: center;
background-color: #0d1321;
height: 5em;
position: fixed;
z-index: 3;
width: 100%;
bottom: 0;
left:0;
`
export const Input = styled.input`
height: 50%;
width: 70%;
background-color: #3e5c76;
color:#f0ebd8;
border: 2px solid #f0ebd8;
border-radius: 10px;

`

export const Icon = styled.button`
border:none;
background-color: transparent;
color: #f0ebd8;
font-size: 1.5em;
padding-top: 5px;

`

export const Img = styled.img`
height: 10%;
width: 10%;
max-height: 40px;
max-width: 40px;
border-radius: 50%;
margin: 5px;
padding: 5px;
`

export const BubbleR = styled.p`
display: flex;
align-items: center;
justify-content: flex-start;
text-align: left;
background-color: #748cab;
border-radius: 15px;
color: #f0ebd8;
min-height: 1.5em;
width: 40%;
max-width: 50%;
margin: 5px;
padding-left: 15px;
padding: 10px;
`
export const Bubble = styled.p`
display: flex;
align-items: center;
justify-content: flex-end;
text-align: right;
background-color: #3e5c76;
border-radius: 15px;
color: #f0ebd8;
min-height: 1.5em;
width: 40%;
max-width: 50%;
margin: 5px;
padding-right: 15px;
padding: 10px;
`

export const Sent = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: row-reverse;
margin-right: 5px;
`

export const Received = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
margin-left: 5px;

`

export const SButton = styled.button`
height: 35px;
width: 100px;
border: none;
border-radius: 10px;
background-color: #f0ebd8;
color: #3e5c76;
font-size: large;
`