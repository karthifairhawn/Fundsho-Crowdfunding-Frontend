import { type } from 'jquery';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

const Security = () => {

    const notify = (msg,Type) => {
        toast(msg,{
            type: Type,
            theme: 'dark'
        })
    }
    
    const [password,setPassword] = useState("");
    const [newPassword1,setNewPassword1] = useState("");
    const [newPassword2,setNewPassword2] = useState("");

    const changePassword = () => {
        console.log(newPassword1===newPassword2);
        if(newPassword1 === newPassword2) {
            let obj = {
                userId: localStorage.getItem("userId"),
                email: localStorage.getItem("email"),
                oldPassword: password,
                password: newPassword1
            }
            
            fetch('http://localhost:8080/updatepass', {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            .then( (response) => {                
                if(response.ok) {
                    notify("Changed Password","success");
                    setPassword("");
                    setNewPassword1("");
                    setNewPassword2("");
                }else if(response.status==400){
                    setPassword("");
                    setNewPassword1("");
                    setNewPassword2("");
                    notify("Old Password Wrong","error");                    
                }
            })             
            .catch(err => console.log(err));
        }
    }
        
    return ( 
        <>
            <>
                <div className="title">Security and Privacy</div>

                <div className="sub-container-sec">
                    <div className="sub-title">Where You're Logged in</div>
                    <div className="all-login-container">
                        <div className="login-info">
                            <span className="location-symbol">
                                                            
                            </span>
                            <div className="login-info-grid">
                                <span className="login-place-time">                                    
                                    <span className="login-place"><i className="fa fa-location-arrow" aria-hidden="true"></i>Kovilpatti</span>
                                    <span className="login-time-device">Active - Now Windows</span>
                                </span>
                                <span className="login-place-time">
                                    <span className="login-place"><i className="fa fa-location-arrow" aria-hidden="true"></i>Tenkasi</span>
                                    <span className="login-time-device">20 hours ago · XiaoMi Redmi Note 5 Pro</span>
                                </span>
                                <span className="login-place-time">
                                    <span className="login-place"><i className="fa fa-location-arrow" aria-hidden="true"></i>Chennai</span>
                                    <span className="login-time-device">1 day ago · XiaoMi Redmi Note 7 Pro</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <br />
                <br />
                <div className="sub-container-sec">
                    <div className="sub-title">Change Password</div>

                    <form className="change-password-form">
                        <span className="change-pass-row">
                            <label>Old Password :</label>
                            <input type="password" value={password} onChange={ (e) => { setPassword(e.target.value); }}/>
                        </span>
                        <span className="change-pass-row">
                            <label>New Password :</label>
                            <input type="password" value={newPassword1} onChange={ (e) => { setNewPassword1(e.target.value); }} />
                        </span>
                        <span className="change-pass-row">
                            <label>Retype New Password :</label>
                            <input type="password" value={newPassword2} onChange={ (e) => { setNewPassword2(e.target.value); }} />
                        </span>                                   
                        <Button onClick={ (e) => { e.preventDefault(); changePassword(); }} variant="danger">Change Password</Button>
                    </form>
                </div>
            </>
        </>
     );
}
 
export default Security;
