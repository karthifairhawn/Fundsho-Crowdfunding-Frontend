import { Link, useHistory } from 'react-router-dom';
import Navbar from "../Footers_Header/navbar";
import {APIIP} from '../Settings/config';
import { useEffect } from 'react';


const LoginPage = () => {
  const history = useHistory();    
    
  function loginUser(e){      
    var email = e.target.email.value
    var password = e.target.password.value
    e.preventDefault();
    var json = JSON.stringify({
      email:email,
      password:password
    })
    var url = APIIP.ip+"/users/login"
    // console.log(url);
    fetch(url,{
      method:"POST",
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: json
      
    }).then(response => {
      handleLoginResponse(response)
    })
  
    
    function handleLoginResponse(response) {
      
      
      if (response.status === 200) {
        response.json().then(response => {        
          localStorage.setItem('sessionKey', response.sessionKey)
          localStorage.setItem('userId', response.userId)
          localStorage.setItem('role', response.role)
          // console.log(response);    
          history.push('/home');        
        })
      } else {
        alert("Login failed");
      }
    }
  
    
  }

  
  
  useEffect(() => {
    if(localStorage.getItem('sessionKey')!==null){
      history.push('/home');
    }
  })
    return ( 
      <>
        <Navbar/>
        <div className="d-flex align-items-center justify-content-around flex-wrap" style={{height:"90vh"}}>
          <div className="img-fluid d-flex" style={{width:"700px"}}>
            <img className="img-fluid" src="https://preview.colorlib.com/theme/bootstrap/login-form-07/images/undraw_remotely_2j6y.svg" alt="Login" />
          </div>
          <div className="login-form">
          <form onSubmit={(e)=>{loginUser(e)}}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" name="password"className="form-control" id="exampleInputPassword1"/>
            </div>            
            
            <input type="submit" className="btn btn-primary" value="Login"/>
            <br />

            <Link to="/register">Create a new account</Link>

          </form>
          </div>
        </div>        
       </>
     );
}
 
export default LoginPage;