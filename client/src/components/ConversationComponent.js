import {SearchContainer,SearchInput,ChatBox, Container, ProfileHeader, ProfileImage, Emoji, MessageContainer, MessageDiv, Message, MessageTime, SendButton, SendButtonSign} from './../styles/ConversationComponent'
import {messagesList} from './../mockData';
import EmojiPicker from 'emoji-picker-react';
import { useState } from 'react';



export const ConversationComponent = (props)=>{
    const [text,setText]  = useState()
    const onEmojiclick= (event,emoji)=>{
        if(text)
        {setText(text+String(emoji.emoji))}
        else{
            setText(String(emoji.emoji))
        }
    }
    const onInput= (event,text_inp)=>{
        setText(text+text_inp)
    }
    const [pickerVisible,togglePicker] = useState()
    const [messageList,setMessageList] = useState(messagesList)
    const onEnterPress = (e)=>{
        if(e.key =="Enter"){
            const message = [...messageList];
            message.push({
                id:messageList.length +1,
                messageType:"TEXT",
                text,
                senderID: 0,
                addedOn: "12:02 PM"
            })
            setMessageList(message)
            setText("") 
        }
    }
    const SendMessge  = (e)=>{
        messageList.push({
            id:messageList.length +1,
            messageType:"TEXT",
            text,
            senderID: 0,
            addedOn: "12:02 PM"
        })
        setText("") 
    }
    return(
    <Container>
        <ProfileHeader>
            <ProfileImage src={props.selectedChat.profilePic}/>
            {props.selectedChat.name}
        </ProfileHeader>
        <MessageContainer>
            {messageList.map((messageData,index)=>
            
                <MessageDiv key={index} isYours={(messageData.senderID)===0?true:false}>
                    <Message key={index} isYours={(messageData.senderID)===0?true:false}>
                        <span>{messageData.text}</span>
                        <MessageTime key={index}>
                            <span>
                                {messageData.addedOn}
                            </span>
                        </MessageTime>
                    </Message>
                </MessageDiv>
            )}
           
        </MessageContainer>
        <ChatBox>
            <SearchContainer>
                {pickerVisible && <EmojiPicker pickerStyle={{position:"absolute",left:"15px",bottom:"50px"}}
                    onEmojiClick={onEmojiclick}/>}
                <Emoji src="data.svg" onClick={()=>{
                    togglePicker(!pickerVisible)
                }}/>
                <SearchInput onKeyDown={onEnterPress} type="text" placeholder="Type a message" value={text} onChange={(e)=>{setText(e.target.value)}}/>
                </SearchContainer>
                <SendButton><SendButtonSign src="/send-sign.png" onClick={SendMessge} /></SendButton>
        </ChatBox>
    </Container>)
}