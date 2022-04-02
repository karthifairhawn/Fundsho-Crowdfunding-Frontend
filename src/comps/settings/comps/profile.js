import { useState,useEffect } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {APIIP} from '../config';
toast.configure();

const Profile = () => {

    

    const [changedData,setChangedData] = useState(false);
    const [fname,setFname] = useState("");
    const [lname,setLname] = useState("");
    const [email,setEmail] = useState("");
    const [dob,setDob] = useState("");


    
    const [phNumber,setPhNumber] = useState("");
    const [username,setUsername] = useState("");
    


    const notify = (msg,Type) => {
        toast(msg,{
            type: Type,
            theme: 'dark'
        })
    }

    
    

   useEffect(() =>{        
       //console.log(localStorage);
        var nullValues = false;
        function checkNull(msg){
            if(msg === "null" || msg ===null){
                nullValues=true;                
                return "";
            }       
            return msg;
        }
        setChangedData(false);
        fetch(APIIP.ip+"/getuser/"+localStorage.getItem('sessionkey'))
        .then( (response)=> response.json())
        .then( (response => {
            // console.log(localStorage.getItem('sessionkey'));
            setFname(checkNull(response.fname));
            setLname(checkNull(response.lname));
            setEmail(checkNull(response.email));
            // setDob(checkNull(response.dob));        
            setPhNumber(checkNull(response.phNumber));
            setUsername(checkNull(response.username));       
            
            
        
            let date = checkNull(response.dob);
            // setDob(date);
            if(date!==null){
                date = date.split("T")[0].split("-");
                date = date[0]+"-"+date[1]+"-"+date[2];
                setDob(date);   
            }  
            
        

            if(nullValues){
                notify("Please update profile","warning");
            }

        }))

    },[]);


    useEffect(() => {
        // console.log(localStorage);  
    });


    function updateProfile() {

        let obj = {
            fname: fname,
            lname: lname,
            email: email,
            dob: dob,
            phNumber: phNumber,
            userId: localStorage.getItem("userId"),
            username: username,
            sessionKey: localStorage.getItem("sessionkey"),
        };
        
        fetch(APIIP.ip+'/updateuser', {
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

            <form className="form-container-profile">
                
                <div className="profile-page-img"> <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="profile-img" /> </div>
                <hr className="hr"/>
            
                <div className="form-set_of_2">
                    <span className="names-span">                    
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" value={fname} onChange={ (e) => {setChangedData(true); setFname(e.target.value)}}/>
                    </span>
                    <span className="names-span">                    
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" value={lname} onChange={ (e) => {setChangedData(true);setLname(e.target.value)}}/>
                    </span>
                </div>
                <br />

                <div className="form-set_of_2">
                    <span className="names-span">                    
                            <label htmlFor="firstname">Email</label>
                            <input type="email" value={email} onChange={ (e) => {setChangedData(true);setEmail(e.target.value)}}/> 
                    </span>                
                    <span className="names-span">                    
                            <label htmlFor="username">User Name</label>
                            <input type="text" value={username} onChange={ (e) => {setChangedData(true);setUsername(e.target)}} />
                    </span>
                </div>
                <br />

                <div className="form-set_of_2">
                    <span className="names-span">                    
                            <label htmlFor="dob">DOB</label>
                            <input type="date" value={dob} onChange={ (e) => {setChangedData(true);setDob(e.target.value)}} />
                    </span>                                
                </div>
                <br />

                <div className="form-set_of_2">
                    <span className="names-span">                    
                            <label htmlFor="number">Contact Number</label>
                            <input type="text" value={phNumber} onChange={ (e) => {setChangedData(true);setPhNumber(e.target.value)}}/>
                    </span>                                
                </div>
                <br />

                <span className="submit-btn-grp">
                    <span></span>

                    <button type="submit" className={"" + (changedData ? '' : 'disabled')} value="Save Changes" onClick={ (e) => { 
                            e.preventDefault(); 
                            if(!e.target.classList.contains("disabled")){
                                updateProfile();
                            }                            
                        } }>
                    Submit
                    </button>
                </span>


            </form>
        </>
     );
}
 
export default Profile;

