const Security = () => {
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
                                    <span className="login-place"><i class="fa fa-location-arrow" aria-hidden="true"></i>Kovilpatti</span>
                                    <span className="login-time-device">Active - Now Windows</span>
                                </span>
                                <span className="login-place-time">
                                    <span className="login-place"><i class="fa fa-location-arrow" aria-hidden="true"></i>Tenkasi</span>
                                    <span className="login-time-device">20 hours ago · XiaoMi Redmi Note 5 Pro</span>
                                </span>
                                <span className="login-place-time">
                                    <span className="login-place"><i class="fa fa-location-arrow" aria-hidden="true"></i>Chennai</span>
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
                            <input type="password" />
                        </span>
                        <span className="change-pass-row">
                            <label>New Password :</label>
                            <input type="password" />
                        </span>
                        <span className="change-pass-row">
                            <label>Retype New Password :</label>
                            <input type="password" />
                        </span>           
                        <input type="submit" value="Change Password" class="change-pass-submit"/>
                    </form>
                </div>
            </>
        </>
     );
}
 
export default Security;
