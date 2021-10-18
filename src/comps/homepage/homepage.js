import React from 'react';
import './homepage.css';


class Homepage extends React.Component {

    componentDidMount() {


        let home = document.getElementById('ni-home');
        let contact = document.getElementById('ni-contact');    
        let about = document.getElementById('ni-about');
    
        home.classList.add("active");
        contact.classList.remove("active");    
        about.classList.remove("active");


        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container_home = document.getElementById('container-home');
    
        signUpButton.addEventListener('click', () => {
            container_home.classList.add("right-panel-active");
        });
    
        signInButton.addEventListener('click', () => {
            container_home.classList.remove("right-panel-active");
        }); 
    }



  
    render() {
        return (
        
            <div className="home-container" onLoad={() => this.login_form()}>
                <div className="container-home" id="container-home">
                    <div className="form-container sign-up-container">
                        <form action="#">
                            <h1>Create Account</h1>
                            <span>or use your email for registration</span>
                            <input required type="text" placeholder="Name" />
                            <input required type="email" placeholder="Email" />
                            <input required type="password" placeholder="Password" />
                            <button>Sign Up</button>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form action="#">
                            <h1>Sign in</h1>
                            <span>or use your account</span>
                            <input required type="email" placeholder="Email" />
                            <input required type="password" placeholder="Password" />
                            <a href="#">Forgot your password?</a>
                            <button>Sign In</button>
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
}



export default Homepage;