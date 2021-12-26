import React, { useEffect,useLayoutEffect,useState } from 'react';
import { Link,useHistory } from 'react-router-dom';
import {APIIP} from '../settings/config';


const Homepage = () => {

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

      


    useLayoutEffect(() => {
        if(localStorage.getItem("userId")!=null){
            let path = '/settings/profile'; 
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
        .then(json => setSession(json))
        .catch(err => console.log(err));    
    }

    function setSession(data) {          
        localStorage.setItem('fname', data.fname);        
        localStorage.setItem('lname', data.lname);        
        localStorage.setItem('email', data.email);
        
        let date = data.dob;
        date = date.split("T")[0].split("-");
        date = date[0]+"-"+date[1]+"-"+date[2];
        localStorage.setItem('dob', date);     
            
        localStorage.setItem('phNumber', data.phNumber);         
        localStorage.setItem('userId', data.userId);        
        localStorage.setItem('username', data.username);   

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


            
        let path = 'settings/profile'; 
        history.push(path);
        
    }

    const [loginEmail,setEmail] = useState("");
    const [loginPassword,setPassword] = useState("");

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
    
    return (
    
        <div className="home-container" onLoad={() => this.login_form()}>
            <div className="container-home" id="container-home">
                <div className="form-container sign-up-container">
                    <form action="#" className="home-form">
                        <h1>Create Account {process.env.api_address+" "}</h1>
                        <span>or use your email for registration</span>
                        <input required className="login-input" type="text" placeholder="Name" />
                        <input required className="login-input" type="email" placeholder="Email" />
                        <input required className="login-input" type="password" placeholder="Password" />
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#" className="home-form">
                        <h1>Sign in</h1>
                        <span>or use your account</span>
                        <input required className="login-input" type="email" onChange={ (e)=>{setEmail(e.target.value)}} placeholder="Email" />
                        <input required className="login-input" type="password" onChange={ (e)=>{setPassword(e.target.value)}}placeholder="Password" />
                        <Link to="#">Forgot your password?</Link>
                        <button onClick={ (e) =>{
                                    e.preventDefault();         
                                    loginUser();
                                }}>Sign In</button>
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
                            <button className="ghost" id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>                
            </div>

        </div>
    );
}




export default Homepage;