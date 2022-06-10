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
        
        <div className="cnavbar"  style={style}>
        <span className="logo"></span>
            <div className="nav-links">

            { 
                localStorage.getItem('sessionKey')===null && 
                <NavLink className="navbarItem" to="/login" activeClassName="active">Login/Register</NavLink>                        
            }

            
            <NavLink className="navbarItem" to="/home" activeClassName="active">home</NavLink>            
            <NavLink className="navbarItem" to="/about" activeClassName="active">about</NavLink>
            <NavLink className="navbarItem" to="/contact-us" activeClassName="active">contact us</NavLink>            
    
            </div>

        {
            localStorage.getItem('sessionKey')!==null && 
            <div className="right-buttons">            
                <Link to="/settings/profile" ><i style={{color:"#015c7d"}} className="fa fa-user setting-btn"></i></Link>
                <span onClick={() => { logout(); } }><i style={{color:"#015c7d"}} className="fa fa-sign-out logout-btn"></i></span>
            </div>
        }             
        
        <span></span>
        </div>
        </div>
     );
}
 
export default Navbar;