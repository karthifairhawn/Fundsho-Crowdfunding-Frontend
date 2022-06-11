import { Link } from 'react-router-dom';


import Navbar from "../footer_header/navbar";

function loginUser(e){
    e.preventDefault();
}

const Register = () => {
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
                    <input type="email" className="form-control" name="fname" id="exampleInputEmail1" aria-describedby="emailHelp"/>              
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