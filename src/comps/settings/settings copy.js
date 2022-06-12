import {Route, NavLink} from 'react-router-dom';
import Email from './comps/Email/Email.js';
import Security from './comps/security.js';
import Wallet from './comps/Wallet/Wallet.js';
import Profile from './comps/Profile/Profile.js';

import Navbar from '../footer_header/navbar.js';


const Setting = (  ) => {      
    return (
    <>       
    <Navbar/>
     <div className="setting-container">
        <div className="left-pane-setting" style={{borderRight: '1px solid black',height: '100%'}}>
          <div className="d-flex m-2 mb-1 fs-5 text-opacity-75 mt-5">SETTINGS</div>
          <div className="left-pane-setting-options">
            
            <NavLink exact to="/settings/profile" activeClassName="active-pane-link">
              <span className="left-pane-setting-options-btn">                
                  <i className="fa fa-user"></i>
                  Profile
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