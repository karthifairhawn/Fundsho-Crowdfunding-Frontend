import { Link,useHistory } from 'react-router-dom';
import {APIIP} from '../Settings/config';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../Footers_Header/navbar";

toast.configure();
const notify = (msg,Type) => {
  toast(msg,{
      type: Type,
      theme: ''
  })
}




const Register = () => {
  const history = useHistory();   
  
  function loginUser(e){

    e.preventDefault();
  
    
    if(e.target.elements[5].value !== e.target.elements[6].value) {          
      notify("Passwords doesn't match!","warning");
      return false; //
    }
  
  
  
    // console.log(e.target.elements[0].value);
      fetch(APIIP.ip+"/users", {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            fname: e.target.elements[0].value,
            lname: e.target.elements[1].value,
            dob: e.target.elements[2].value,
            phNumber: e.target.elements[3].value,
            email: e.target.elements[4].value,
            password: e.target.elements[5].value,
            bio:e.target.elements[7].value,
            username: e.target.elements[8].value,
            avatarUrl: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000px"
            
          })  
      })
      .then(response => response.json())
      .then(response => {        
        if(response.userId !== undefined){
          history.push("/login");
        }else {
          notify("Creating user accounts temporarily restricted. Contact your administrator.","danger");
        }
      })
        
   
    } 
    

    return ( 
        <>
        <Navbar/>
        <div className="d-flex align-items-center justify-content-around flex-wrap" style={{height:"90vh"}}>
          <div className="img-fluid d-flex" style={{width:"700px"}}>
            <img className="img-fluid" src="https://preview.colorlib.com/theme/bootstrap/login-form-07/images/undraw_remotely_2j6y.svg" alt="Login" />
          </div>
          <div className="login-form">

          <form onSubmit={(e)=>{loginUser(e)}} className="card">
            <div className="card-body">

            <div className="d-flex">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">First Name:</label>
                    <input type="text" className="form-control" name="fname" id="exampleInputEmail1" aria-describedby="emailHelp"/>              
                </div>
                <span className="m-3"></span>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Last Name:</label>
                    <input type="text" name="lname"className="form-control" id="exampleInputPassword1"/>
                </div>            
            </div>

            <div className="d-flex">

                <div className="mb-3" style={{width:"50%"}}>
                    <label htmlFor="exampleInputEmail1" className="form-label">Date of Birth:</label>
                    <input type="date" className="form-control" name="dob" id="exampleInputEmail1" aria-describedby="emailHelp"/>              
                </div>
                <span className="m-3"></span>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Phone Number: </label>
                    <input type="tel" className="form-control" name="phNumber" id="exampleInputEmail1" aria-describedby="emailHelp"/>              
                </div>

            </div>


            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Email: </label>
              <input type="email" name="email"className="form-control" id="exampleInputPassword1"/>
            </div>            
                        

            <div className="d-flex">
                <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" name="password1"className="form-control" id="exampleInputPassword1"/>
                </div>  
                <span className="m-3"></span>
                <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Re-enter Password</label>
                <input type="password" name="password2"className="form-control" id="exampleInputPassword1"/>
                </div>     
            </div>

            <div className="d-flex">
              <div className="mb-3" style={{width: "100%"}}>
                <label htmlFor="exampleInputPassword1" className="form-label">Bio</label>
                <textarea style={{width: "100%"}} maxLength="500" type="text" name="bio" className="form-control" id="exampleInputPassword1"/>                
              </div>
            </div>
             
            
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
              <input type="text" className="form-control" name="username" id="exampleInputEmail1" aria-describedby="emailHelp"/>              
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Profile Avatar</label>
              <input type="file"  accept="image/*" name="profile" className="form-control" id="exampleInputPassword1"/>
            </div>            
            
            <div className="d-flex justify-content-between">
                <input type="submit" className="btn btn-primary" value="Register"/>

                <div className="d-flex flex-column">
                    <Link to="/login" className="fs-6">Login now.</Link>
                    <Link to="/forget-pass" className="fs-6">Recover lost password.</Link>
                </div>
            </div>

            </div>
          </form>


          </div>
        </div>        
       </>
     );
}
 
export default Register;