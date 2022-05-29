import React,{useState} from 'react';
import styled from 'styled-components';
import {ContactListComponent} from   './components/ContactListComponent'
import {ConversationComponent} from './components/ConversationComponent'
const Container = styled.div`
  display:flex;
  flex-direction:row;
  height:100vh;
  width:99%;
  height:98vh;
  margin-top:1%;
  margin:auto auto;
  background-color:#f8f9fb;
`
const Placeholder = styled.div`
  flex:3 1 0;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  color:rgba(0,0,0,0.65);
  gap:10px;
  font-size:14px;
  span{
    font-size:32px;
    color:#525252;
  }
`;
const ChatPlaceholder=styled.img`
  width:240px;
  height:240px;
  border-radius:50%;
  object-fit:contain;
`;
function App() {
  const [selectedChat,setChat] = useState(false)
  return (
    <Container> 
      <ContactListComponent setChat ={setChat} />
      {selectedChat?<ConversationComponent selectedChat = {selectedChat}/>:
      <Placeholder>
        <ChatPlaceholder src="/welcome-placeholder.jpeg" />
        <span>Keep Your Phone Connected</span>
        WhatsApp connects to your phone to sync messages
        </Placeholder>}
    </Container>
  );
}

export default App;
