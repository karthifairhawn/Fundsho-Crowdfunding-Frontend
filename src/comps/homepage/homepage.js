import React, { useEffect,useState } from 'react';
import { Link,useHistory } from 'react-router-dom';


const Homepage = () => {
    const history = useHistory();

    function loginUser() {

        let obj = {
            email: loginEmail,
            password: loginPassword
        }
        
        fetch('http://localhost:8080/auth', {
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
        localStorage.setItem('dob', data.dob);         
        localStorage.setItem('phNumber', data.phNumber);         
        localStorage.setItem('userId', data.userId);        
        localStorage.setItem('username', data.username);   

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
                        <h1>Create Account</h1>
                        <span>or use your email for registration</span>
                        <input required type="text" placeholder="Name" />
                        <input required type="email" placeholder="Email" />
                        <input required type="password" placeholder="Password" />
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#" className="home-form">
                        <h1>Sign in</h1>
                        <span>or use your account</span>
                        <input required type="email" onChange={ (e)=>{setEmail(e.target.value)}} placeholder="Email" />
                        <input required type="password" onChange={ (e)=>{setPassword(e.target.value)}}placeholder="Password" />
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