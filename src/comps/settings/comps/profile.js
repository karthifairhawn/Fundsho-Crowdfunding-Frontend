const Profile = () => {
    return ( 
        <>
        <div className="title">Edit Profile</div>
            <form className="form-container-profile">
                
                <div className="profile-page-img"> <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="profile-img" /> </div>
                <hr className="hr"/>
            
                <div className="form-set_of_2">
                    <span className="names-span">                    
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" />
                    </span>
                    <span className="names-span">                    
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" />
                    </span>
                </div>
                <br />

                <div className="form-set_of_2">
                    <span className="names-span">                    
                            <label htmlFor="firstname">Email</label>
                            <input type="email" />
                    </span>                
                    <span className="names-span">                    
                            <label htmlFor="username">User Name</label>
                            <input type="text" />
                    </span>
                </div>
                <br />

                <div className="form-set_of_2">
                    <span className="names-span">                    
                            <label htmlFor="dob">DOB</label>
                            <input type="date" />
                    </span>                                
                </div>
                <br />

                <div classNameName="form-set_of_2">
                    <span className="names-span">                    
                            <label htmlFor="number">Contact Number</label>
                            <input type="text" />
                    </span>                                
                </div>
                <br />

                <span className="setting-submit-btn">
                    <span></span>
                    <input type="submit" value="Save Changes"/>
                </span>


            </form>
        </>
     );
}
 
export default Profile;
