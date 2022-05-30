import {MessageText ,ContactName,ContactInfo, Container,ProfileIcon,ProfileImage,ProfileInfoDiv, SearchBox, SearchContainer, SearchIcon, SearchInput, ContactItem, MessageTime} from './../styles/ContactListComponent'
import { contactLists } from '../mockData';
import { GoogleLogout } from 'react-google-login';
import { useCookies } from 'react-cookie';
export const ContactComponent = (props)=>{
    let userData = props.userData;
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
    const [cookies,setCookie] = useCookies(['user-info']);
    const logout =(res)=>{
       setCookie('user-info',undefined);
    }
    return(
    <Container>
        <ProfileInfoDiv>
            <ProfileImage src={props.imageUrl} />
            <GoogleLogout clientId="54320360431-veja7a87jmltvaegkm10jfnthn6omksp.apps.googleusercontent.com" buttonText='Sign Out' onLogoutSuccess={logout} />
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