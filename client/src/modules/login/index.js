import { CardView, Container, Header, Instructions, QRCode } from "./style";
import {GoogleLogin } from 'react-google-login';
import {gapi} from "gapi-script";
import {useCookies, withCookies} from 'react-cookie';
import App from "../../App";
export const LoginComponent =()=>{
    
    const [cookies,setCookie] = useCookies(['user-info']);
    

    const handleResponseFromGoogle=(res)=>{
        console.log(res);
        setCookie('user-info',res.profileObj);
    }
    // to enable connection to google APIs
    gapi.load("client:auth2", () => {
        gapi.client.init({
          clientId:
            "54320360431-veja7a87jmltvaegkm10jfnthn6omksp.apps.googleusercontent.com",
          plugin_name: "chat",
        });
      });
      
    return(
        <>
        {cookies["user-info"]!="undefined"?  <App userinfo= { cookies['user-info']} />:
        <Container>
            <Header>
                WhatsApp Web Clone
            </Header>
            <CardView>
                <Instructions>
                    <header>To use WhatsApp on your computer:</header>
                    <ol>
                        <li>You need to Signin using your Google Account</li>
                        <li>You can anytime logout from the Web</li>
                        <li>Click on Signin button to continue using tthe Whatsapp Clone</li>
                    </ol>
                    <GoogleLogin clientId="54320360431-veja7a87jmltvaegkm10jfnthn6omksp.apps.googleusercontent.com" buttonText="Sign in with Google" onSuccess={handleResponseFromGoogle} onFailure={handleResponseFromGoogle}  cookiePolicy={'single_host_origin'} />
                </Instructions>
                <QRCode src="qr-placeholder.png"/>
            </CardView>
        </Container>}
        </>
    )
};