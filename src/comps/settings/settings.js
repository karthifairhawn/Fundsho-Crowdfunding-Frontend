import {Route, NavLink} from 'react-router-dom';
import Email from './comps/email.js';
import Security from './comps/security.js';
import Wallet from './comps/wallet.js';
import Profile from './comps/profile.js';
import Navbar from '../footer_header/navbar.js';
// import {useState,useEffect} from'react';


const Setting = (  ) => {      
    return (
    <>       
    <Navbar/>
     <div className="setting-container">
        <div className="left-pane-setting">
          <div className="d-flex m-2 mb-1 fs-5 text-opacity-75 mt-5">SETTINGS</div>
          {/* <div className="left-pane-setting-info">
            <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="profile-img" className="profile-img" />
            <div className="left-pane-setting-info-r">
              <span className="profile-info-name">{'@'+localStorage.getItem("username")}</span>
              <span className="wallet-balance">₹ {balance}</span>
            </div>                            
          </div> */}          

          <div className="left-pane-setting-options">
            
            <NavLink exact to="/settings/profile" activeClassName="active-pane-link">
              <span className="left-pane-setting-options-btn">                
                  <i className="fa fa-user"></i>
                  Edit Profile
              </span>
            </NavLink>

            <NavLink to="/settings/wallet" activeClassName="active-pane-link">
              <span className="left-pane-setting-options-btn">                  
                  <i className="fa fa-credit-card-alt" aria-hidden="true"></i>
                  Wallet
              </span>
            </NavLink>

            <NavLink to="/settings/security" activeClassName="active-pane-link">
              <span className="left-pane-setting-options-btn">
                <i className="fa fa-lock"></i>
                Security and Privacy
              </span>
            </NavLink>

            <NavLink to="/settings/email" activeClassName="active-pane-link">
              <span className="left-pane-setting-options-btn">
                <i className="fa fa-envelope"></i>
                Email and SMS
              </span>                
            </NavLink>
          </div>
        </div>
        <div className="settings-content">


          <Route path="/settings/email">
            <Email/>
          </Route>
          <Route path="/settings/security">
            <Security/>
          </Route>
          <Route path="/settings/wallet">
            <Wallet/>
          </Route>
          <Route path="/settings/profile">
            <Profile/>
          </Route>


        </div>
      </div>
    </>
    );
}

export default Setting;