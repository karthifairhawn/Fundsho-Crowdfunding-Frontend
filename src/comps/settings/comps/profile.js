import { useState,useEffect} from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const Profile = () => {

    const notify = (msg,Type) => {
        toast(msg,{
            type: Type,
            theme: 'dark'
        })
    }

    const [changedData,setChangedData] = useState(false);
    const [fname,setFname] = useState(localStorage.getItem("fname"));
    const [lname,setLname] = useState(localStorage.getItem("lname"));
    const [email,setEmail] = useState(localStorage.getItem("email"));
    const [dob,setDob] = useState(localStorage.getItem("dob"));


    
    const [phNumber,setPhNumber] = useState(localStorage.getItem("phNumber"));    
    const [username,setUsername] = useState(localStorage.getItem("username"));
    const [firstRender,setFirstRender] = useState(true);
    
    useEffect(() => {
        if(firstRender){
            setFirstRender(false);
        }else{
            setChangedData(true);
        }
    },[fname,lname,email,dob,phNumber,username]);

    function updateProfile() {

        let obj = {
            fname: fname,
            lname: lname,
            email: email,
            dob: dob,
            phNumber: phNumber,
            userId: localStorage.getItem("userId"),
            username: username,
        };
        
        fetch('http://localhost:8080/updateuser', {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then( (response) => {
            if(response.ok) {
                localStorage.setItem('fname', fname);        
                localStorage.setItem('lname', lname);        
                localStorage.setItem('email', email);        
                localStorage.setItem('dob', dob);         
                localStorage.setItem('phNumber', phNumber);                               
                localStorage.setItem('username', username);                   
                setChangedData(false);
                notify("Updated Profile","info");
            }
        })         
        .catch(err => console.log(err));    
        
    }

    
    return ( 
        <>
   <div className="title">Edit Profile</div>
            <ToastContainer
                    autoClose={2000}
                    position="top-right"
                    className="toast-container"                       
                />
            <form className="form-container-profile">
                
                <div className="profile-page-img"> <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="profile-img" /> </div>
                <hr className="hr"/>
            
                <div className="form-set_of_2">
                    <span className="names-span">                    
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" value={fname} onChange={ (e) => setFname(e.target.value)}/>
                    </span>
                    <span className="names-span">                    
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" value={lname} onChange={ (e) => setLname(e.target.value)}/>
                    </span>
                </div>
                <br />

                <div className="form-set_of_2">
                    <span className="names-span">                    
                            <label htmlFor="firstname">Email</label>
                            <input type="email" value={email} onChange={ (e) => setEmail(e.target.value)}/> 
                    </span>                
                    <span className="names-span">                    
                            <label htmlFor="username">User Name</label>
                            <input type="text" value={username} onChange={ (e) => setUsername(e.target)} />
                    </span>
                </div>
                <br />

                <div className="form-set_of_2">
                    <span className="names-span">                    
                            <label htmlFor="dob">DOB</label>
                            <input type="date" value={dob} onChange={ (e) => setDob(e.target.value)} />
                    </span>                                
                </div>
                <br />

                <div className="form-set_of_2">
                    <span className="names-span">                    
                            <label htmlFor="number">Contact Number</label>
                            <input type="text" value={phNumber} onChange={ (e) => setPhNumber(e.target.value)}/>
                    </span>                                
                </div>
                <br />

                <span className="setting-submit-btn">
                    <span></span>
                    <input type="submit" className={"" + (changedData ? '' : 'disabled')} value="Save Changes" onClick={ (e) => { 
                            e.preventDefault(); 
                            if(!e.target.classList.contains("disabled")){
                                updateProfile();
                            }                            
                        } }/>
                </span>


            </form>
        </>
     );
}
 
export default Profile;

