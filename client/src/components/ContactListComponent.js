import {MessageText ,ContactName,ContactInfo, Container,ProfileIcon,ProfileImage,ProfileInfoDiv, SearchBox, SearchContainer, SearchIcon, SearchInput, ContactItem, MessageTime} from './../styles/ContactListComponent'
import { contactLists } from '../mockData';

export const ContactComponent = (props)=>{
    let userData = props.userData;
    console.log("!!!!",props.userData);
    if(!props.userData){
        userData={
            profilePic:'undefined',
            name:'Alex',
            lastText:'undefined',
            lastTextTime:'undefined'
        }
    }
    return( 
        <ContactItem onClick={ ()=>props.setChat(userData) }>
            <ProfileIcon src={userData.profilePic}/>
            <ContactInfo >
                <ContactName>{userData.name}</ContactName>
                <MessageText>{userData.lastText}</MessageText>
            </ContactInfo>
            <MessageTime>{userData.lastTextTime}</MessageTime>
        </ContactItem>
    )
};
export const ContactListComponent = (props)=>{
    return(
    <Container>
        <ProfileInfoDiv>
            <ProfileImage src="/profile/sample.jpeg" />
        </ProfileInfoDiv>
        <SearchBox>
            <SearchContainer >
                <SearchIcon src="/search-icon.svg" />
                <SearchInput type="text" placeholder="Search or start a new chat"/>
            </SearchContainer>
        </SearchBox>
        {
        contactLists.map((user,index)=>
        (<ContactComponent key={index} userData={user}  setChat ={props.setChat}/>)
        )} 
        <ContactComponent/>
    </Container>

    )
}