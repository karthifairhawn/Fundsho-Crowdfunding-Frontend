import {Route, NavLink,Link} from 'react-router-dom';
import {useEffect} from 'react';
import Email from './comps/Email/Email.js';
import Security from './comps/security.js';
import Wallet from './comps/Wallet/Wallet.js';
import Profile from './comps/Profile/Profile.js';
import Navbar from '../footer_header/navbar.js';
import './settings.css';

const Setting = (  ) => {      
    useEffect(() => {
      var menu_btn = document.querySelector("#menu-btn");
      var sidebar = document.querySelector("#sidebar");
      var container = document.querySelector(".my-container");
      menu_btn.addEventListener("click", () => {
        sidebar.classList.toggle("active-nav");
        container.classList.toggle("active-cont");
    });
    }, []);

    return (
    <>       
      <Navbar />
      <div>
        <div className="side-navbar active-nav d-flex justify-content-between flex-wrap flex-column" id="sidebar">
          <ul className="nav flex-column text-white w-100">
            <Link to="/" className="nav-link h3 text-dark my-2"> <i className="fa fa-dollar"/> Fundsho</Link>


            <NavLink to="/settings/profile"activeClassName="active-pane-link" className="nav-link text-dark fs-6 mb-3">
              <i className="fa fa-user m-2"></i>
              <span className="mx-2">Profile</span>
            </NavLink>

            <NavLink to="/settings/wallet"activeClassName="active-pane-link" className="nav-link text-dark fs-6 mb-3">
              <i className="fa fa-wallet m-2"></i>
              <span className="mx-2">Wallet</span>
            </NavLink>
            <NavLink to="/settings/security" activeClassName="active-pane-link" className="nav-link text-dark fs-6 mb-3">
              <i className="fa fa-lock m-2"></i>
              <span className="mx-2">Security and Privacy</span>
            </NavLink>
            <NavLink to="/settings/email" activeClassName="active-pane-link" className="nav-link  text-dark fs-6 mb-3">
              <i className="fa fa-envelope m-2"></i>
              <span className="mx-2">Email and Notifications</span>
            </NavLink>
          </ul>
        </div>

        {/* Main Wrapper */}
        <div className="p-1 my-container active-cont">
          {/* Top Nav */}
          <nav className="navbar top-navbar navbar-light bg-light px-5">
            <span className="btn border-0" id="menu-btn"><i class="fa fa-bars" aria-hidden="true"></i></span>
          </nav>
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
          {/*End Top Nav */}
        </div>
      </div>
    </>
    );
}

export default Setting;