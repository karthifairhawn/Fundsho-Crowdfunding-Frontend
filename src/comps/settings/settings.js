import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Email from './comps/email.js';
import Security from './comps/security.js';
import Wallet from './comps/wallet.js';
import Profile from './comps/profile.js';


const Setting = () => {
    return (
    <>       
     <div className="setting-container">
        <div className="left-pane-setting">
          <div className="left-pane-setting-info">
            <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="profile-img" className="profile-img" />
            <div className="left-pane-setting-info-r">
              <span className="profile-info-name">Pepper</span>
              <span className="wallet-balance">₹ 500</span>
            </div>                            
          </div>
          <br />

          <div className="left-pane-setting-options">
            
            <Link to="/settings/profile">
              <span className="left-pane-setting-options-btn">                
                  <i class="fa fa-user"></i>
                  Edit Profile
              </span>
            </Link>

            <Link to="/settings/wallet">
              <span className="left-pane-setting-options-btn">
                  <i class="fa fa-money"></i>
                  Wallet
              </span>
            </Link>

            <Link to="/settings/security">
              <span className="left-pane-setting-options-btn">
                <i class="fa fa-lock"></i>
                Security and Privacy
              </span>
            </Link>

            <Link to="/settings/email">
              <span className="left-pane-setting-options-btn">
                <i class="fa fa-envelope"></i>
                Email and SMS
              </span>                
            </Link>
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