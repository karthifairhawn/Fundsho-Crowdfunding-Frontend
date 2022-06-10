import { Link,NavLink,useHistory } from 'react-router-dom';


const Navbar = ({dark}) => {
    const history = useHistory();

    const logout = () => {
        localStorage.clear();
        history.push('/login');
    }

    var style = {
        
      };
    if(dark==="true"){
        style={            
            "backgroundColor":"black !important"
        }
            
    }else{
        style={};
        
    }

    
    
    return ( 

   
        <div>
                 
        <div>
        <div className="modal fade" id="modalLoginForm" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header text-center">
                <h4 className="modal-title w-100 font-weight-bold">Sign in</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body mx-3">
                <div className="md-form mb-5">
                  <i className="fas fa-envelope prefix grey-text" />
                  <input type="email" id="defaultForm-email" className="form-control validate" />
                  <label data-error="wrong" data-success="right" htmlFor="defaultForm-email">Your email</label>
                </div>
                <div className="md-form mb-4">
                  <i className="fas fa-lock prefix grey-text" />
                  <input type="password" id="defaultForm-pass" className="form-control validate" />
                  <label data-error="wrong" data-success="right" htmlFor="defaultForm-pass">Your password</label>
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-center">
                <button className="btn btn-default">Login</button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a href className="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalLoginForm">Launch
            Modal Login Form</a>
        </div>
      </div>
        
        <div className="cnavbar"  style={style}>
        <span className="logo"></span>
            <div className="nav-links">

            { 
                localStorage.getItem('sessionkey')===null && 
                <a href className="navbarItem" data-toggle="modal" data-target="#modalLoginForm" activeClassName="active">Launch
            Modal Login Form</a>                
            }

            { 
                <NavLink className="navbarItem" to="/home" activeClassName="active">home</NavLink>
            }

            <NavLink className="navbarItem" to="/about" activeClassName="active">about</NavLink>
            <NavLink className="navbarItem" to="/contact-us" activeClassName="active">contact us</NavLink>
            {/* <NavLink className="navbarItem" to="/plans" activeClassName="active">plans</NavLink> */}
    
            </div>

        {
            localStorage.getItem('sessionkey')!==null && 
            <div className="right-buttons">            
                <Link to="/settings/profile" ><i className="fa fa-user setting-btn"></i></Link>
                <span onClick={() => { logout(); } }><i className="fa fa-sign-out logout-btn"></i></span>
            </div>
        }             
        
        <span></span>
        </div>
        </div>
     );
}
 
export default Navbar;