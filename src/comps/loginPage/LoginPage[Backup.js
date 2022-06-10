import React, { useEffect,useLayoutEffect,useState } from 'react';
import { Link,useHistory } from 'react-router-dom';
import {APIIP} from '../settings/config';

import ReCAPTCHA from "react-google-recaptcha";


const LoginPage = () => {

    const handleSocialLogin = (user) => {
        // fetch(APIIP.ip+'/googlesingup/'+user._token.idToken);
        console.log(user);
    };
      
      const handleSocialLoginFailure = (err) => {    

    };

    function getOS() {        
        var nAgt = navigator.userAgent;
        var browserName  = navigator.appName;
        var fullVersion  = ''+parseFloat(navigator.appVersion); 
        var majorVersion = parseInt(navigator.appVersion,10);
        var nameOffset,verOffset,ix;

        // In Opera 15+, the true version is after "OPR/" 
        if ((verOffset=nAgt.indexOf("OPR/"))!==-1) {
        browserName = "Opera";
        fullVersion = nAgt.substring(verOffset+4);
        }
        // In older Opera, the true version is after "Opera" or after "Version"
        else if ((verOffset=nAgt.indexOf("Opera"))!==-1) {
        browserName = "Opera";
        fullVersion = nAgt.substring(verOffset+6);
        if ((verOffset=nAgt.indexOf("Version"))!==-1) 
        fullVersion = nAgt.substring(verOffset+8);
        }
        // In MSIE, the true version is after "MSIE" in userAgent
        else if ((verOffset=nAgt.indexOf("MSIE"))!==-1) {
        browserName = "Microsoft Internet Explorer";
        fullVersion = nAgt.substring(verOffset+5);
        }
        // In Chrome, the true version is after "Chrome" 
        else if ((verOffset=nAgt.indexOf("Chrome"))!==-1) {
        browserName = "Chrome";
        fullVersion = nAgt.substring(verOffset+7);
        }
        // In Safari, the true version is after "Safari" or after "Version" 
        else if ((verOffset=nAgt.indexOf("Safari"))!==-1) {
        browserName = "Safari";
        fullVersion = nAgt.substring(verOffset+7);
        if ((verOffset=nAgt.indexOf("Version"))!==-1) 
        fullVersion = nAgt.substring(verOffset+8);
        }
        // In Firefox, the true version is after "Firefox" 
        else if ((verOffset=nAgt.indexOf("Firefox"))!==-1) {
        browserName = "Firefox";
        fullVersion = nAgt.substring(verOffset+8);
        }
        // In most other browsers, "name/version" is at the end of userAgent 
        else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) < 
                (verOffset=nAgt.lastIndexOf('/')) ) 
        {
        browserName = nAgt.substring(nameOffset,verOffset);
        fullVersion = nAgt.substring(verOffset+1);
        if (browserName.toLowerCase()===browserName.toUpperCase()) {
        browserName = navigator.appName;
        }
        }
        // trim the fullVersion string at semicolon/space if present
        if ((ix=fullVersion.indexOf(";"))!==-1)
        fullVersion=fullVersion.substring(0,ix);
        if ((ix=fullVersion.indexOf(" "))!==-1)
        fullVersion=fullVersion.substring(0,ix);

        majorVersion = parseInt(''+fullVersion,10);
        if (isNaN(majorVersion)) {
        fullVersion  = ''+parseFloat(navigator.appVersion); 
        majorVersion = parseInt(navigator.appVersion,10);
        }

        // document.write(''
        // +'Browser name  = '+browserName+'<br>'
        // +'Full version  = '+fullVersion+'<br>'
        // +'Major version = '+majorVersion+'<br>'
        // +'navigator.appName = '+navigator.appName+'<br>'
        // +'navigator.userAgent = '+navigator.userAgent+'<br>'
        // )

        var userAgent = window.navigator.userAgent,
            platform = window.navigator.platform,
            macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
            windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
            iosPlatforms = ['iPhone', 'iPad', 'iPod'],
            os = null;
      
        if (macosPlatforms.indexOf(platform) !== -1) {
          os = 'Mac OS';
        } else if (iosPlatforms.indexOf(platform) !== -1) {
          os = 'iOS';
        } else if (windowsPlatforms.indexOf(platform) !== -1) {
          os = 'Windows';
        } else if (/Android/.test(userAgent)) {
          os = 'Android';
        } else if (!os && /Linux/.test(platform)) {
          os = 'Linux';
        }
      
        return os+" > "+browserName;
      }

    // function generatePassword(passwordLength) {
    // var numberChars = "0123456789";
    // var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // var lowerChars = "abcdefghijklmnopqrstuvwxyz";
    // var allChars = numberChars + upperChars + lowerChars;
    // var randPasswordArray = Array(passwordLength);
    // randPasswordArray[0] = numberChars;
    // randPasswordArray[1] = upperChars;
    // randPasswordArray[2] = lowerChars;
    // randPasswordArray = randPasswordArray.fill(allChars, 3);
    // return shuffleArray(randPasswordArray.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('');
    // }
    


    useLayoutEffect(() => {
        if(localStorage.getItem("sessionKey")!=null){
            let path = '/'; 
            history.push(path)
        }
    });
    const history = useHistory();    

    function loginUser() {        
        let obj = {
            email: loginEmail,
            password: loginPassword
        }
        
        fetch(APIIP.ip+'/auth', {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then( (response) => {
            
            if(response.ok) {
                
                return response.json();
            }else{
                alert('User not found');
                throw new Error("User not found"); 
            }
        }) 
        .then(json => {            
            setSession(json)            
        })
        .catch(err => console.log(err));    
    }

    function setSession(data) {             
                
        localStorage.setItem('userId', data.userId);        
        localStorage.setItem('username', data.username);  
        localStorage.setItem('sessionkey',data.sessionKey); 
                                                                      
        fetch("https://api.freegeoip.app/json/?apikey=24fb3460-658e-11ec-b1d2-5d001065511b")
        .then((response) => response.json())
        .then( (response) => {
            response["userId"] = data.userId;
            response["device"] = getOS();
            
        fetch(APIIP.ip+'/logindata', {
            method: "POST",
            body: JSON.stringify(response),
            headers: {"Content-type": "application/json; charset=UTF-8"}
            });

        } )           
        let path = '/'; 
        history.push(path);
        
    }

    const [loginEmail,setEmail] = useState("");
    const [loginPassword,setPassword] = useState("");

    const[newUserName,setNewUserName] = useState("");
    const[newEmail,setNewEmail] = useState("");
    const[newPassword,setNewPassword]  = useState("");

    function signUp(){
        if(newEmail ==="" ||newUserName ==="" ||newPassword ===""){
            console.log(newEmail+" "+newUserName+" "+newPassword);
            alert("Fill in all informations to sign up");
            return;
        }
        
        let obj = {
            email: newEmail,
            password: newPassword,
            username: newUserName
        }
        
        fetch(APIIP.ip+'/users', {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {"Content-type": "application/json; charset=UTF-8"}
        })

        let path = '/login'; 
        history.push(path);
    }

    useEffect(() =>{
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container_home = document.getElementById('container-home');
    
        signUpButton.addEventListener('click', () => {
            container_home.classList.add("right-panel-active");
        });
    
        signInButton.addEventListener('click', () => {
            container_home.classList.remove("right-panel-active");
        }); 
         
    })

    function onRecaptchaChange(value){
        console.log("Captcha value:", value);
    }
    
    return (
        <>        

        <div className="home-container" onLoad={() => this.login_form()}>
            <div className="container-home" id="container-home">
                <div className="form-container sign-up-container">
                    <form action="#" className="home-form">
                        <h1>Create Account</h1>
                        <span>or use your email for registration</span>
                        <input required className="login-input" type="text" placeholder="User Name" value={newUserName} onChange={(e) => {setNewUserName(e.target.value)}}/>
                        <input required className="login-input" type="email" placeholder="Email" value={newEmail} onChange={(e) => {setNewEmail(e.target.value)}}/>
                        <input required className="login-input" type="password" placeholder="Password" value={newPassword} onChange={(e) => {setNewPassword(e.target.value)}}/>

                        <ReCAPTCHA
                            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                            onChange={onRecaptchaChange}
                            theme="dark"
                            size="normal"
                        />

                        <button onClick={ (e)=> {e.preventDefault(); signUp(); } } >Sign Up</button>

                        <div style={{borderBottom: "1px solid white",width: "100%",margin:'10px 0'}}/>


                        {/* <div className="social-login-btns">
                            <SocialButton className="google-login"
                            provider="google"
                            appId="211234703568-9q6ssgaikdbfm9q9qkhf0p5oovoknfog.apps.googleusercontent.com"
                            onLoginSuccess={handleSocialLogin}
                            onLoginFailure={handleSocialLoginFailure}
                            >
                                <i className="fa fa-google" aria-hidden="true"></i> 
                            </SocialButton>

                            <SocialButton className="google-login"
                            provider="facebook"
                            appId="211234703568-9q6ssgaikdbfm9q9qkhf0p5oovoknfog.apps.googleusercontent.com"
                            onLoginSuccess={handleSocialLogin}
                            onLoginFailure={handleSocialLoginFailure}
                            >
                                <i className="fa fa-facebook" aria-hidden="true"></i>                 
                            </SocialButton>  
                        </div> */}

                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#" className="home-form">
                        <h1>Sign in</h1>
                        <span>or use your account</span>
                        <input required className="login-input" type="email" onChange={ (e)=>{setEmail(e.target.value)}} placeholder="Email" />
                        <input required className="login-input" type="password" onChange={ (e)=>{setPassword(e.target.value)}}placeholder="Password" />
                        <Link to="#">Forgot your password?</Link>
                        <ReCAPTCHA
                            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                            onChange={onRecaptchaChange}
                            theme="dark"
                            size="normal"
                        />

                        <button onClick={ (e) =>{
                                    e.preventDefault();         
                                    loginUser();
                                }}>Sign In</button>
                        
                        <div style={{borderBottom: "1px solid white",width: "100%",margin:'10px 0'}}/>

                        {/* <div className="social-login-btns">
                            <SocialButton className="google-login"
                            provider="google"
                            appId="211234703568-9q6ssgaikdbfm9q9qkhf0p5oovoknfog.apps.googleusercontent.com"
                            onLoginSuccess={handleSocialLogin}
                            onLoginFailure={handleSocialLoginFailure}
                            >
                                <i className="fa fa-google" aria-hidden="true"></i> 
                            </SocialButton>

                            <SocialButton className="google-login"
                            provider="facebook"
                            appId="211234703568-9q6ssgaikdbfm9q9qkhf0p5oovoknfog.apps.googleusercontent.com"
                            onLoginSuccess={handleSocialLogin}
                            onLoginFailure={handleSocialLoginFailure}
                            >
                                <i className="fa fa-facebook" aria-hidden="true"></i>                 
                            </SocialButton>  
                        </div> */}

                    </form>
                    
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost" id="signUp" >Sign Up</button>
                        </div>
                        
                    </div>
                </div>                
            </div>

        </div>
        </>
    );
}




export default LoginPage;