import { useEffect } from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import Navbar from '../footer_header/navbar.js';
import AdminPanel from './comps/Admin/Admin.js';
import Email from './comps/Email/Email.js';
import Profile from './comps/Profile/Profile.js';
import Security from './comps/security.js';
import Wallet from './comps/Wallet/Wallet.js';
import './settings.css';



const Setting = (  ) => {          

    useEffect(() => {
      var menu_btn = document.querySelector("#menu-btn");
      var sidebar = document.querySelector("#sidebar");
      var container = document.querySelector(".my-container");
      menu_btn.addEventListener("click", () => {
        sidebar.classList.toggle("active-nav");
        container.classList.toggle("active-cont");
        menu_btn.classList.toggle("inside-btn");
        document.getElementsByClassName("fa-angles-left")[0].classList.toggle("invisible");
        document.getElementsByClassName("fa-angles-right")[0].classList.toggle("invisible");
    });
    }, []);

    return (
    <>       
      <Navbar />
      <div>
        <div className="side-navbar active-nav d-flex justify-content-between flex-wrap flex-column" id="sidebar">
          
          <ul className="nav flex-column text-white">             

            <div className="" style={{position: "relative"}}>
              <span className="btn border-0 p-1 " id="menu-btn" style={{position:"absolute",right:"-25px",top:"10px",width:"40px"}}><i className="fa-solid fa-angles-left"></i><i className="fa-solid fa-angles-right invisible"></i></span>   
            </div>

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
            {
              localStorage.getItem('role')==="0"
              && 
              <NavLink to="/settings/admin/users" activeClassName="active-pane-link" className="nav-link  text-dark fs-6 mb-3">
                <i className="fa fa-gear m-2"></i>
                <span className="mx-2">Admin Panel</span>
              </NavLink>
            }
            
          </ul>
        </div>

        {/* Main Wrapper */}
        <div className="p-1 my-container active-cont">
          {/* Top Nav */}
          
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
          <Route path="/settings/admin">
            <AdminPanel/>
          </Route>
        </div>
          {/*End Top Nav */}
        </div>
      </div>
    </>
    );
}

export default Setting;