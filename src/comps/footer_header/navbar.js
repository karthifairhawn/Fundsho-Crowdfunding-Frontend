import { Link,NavLink,useHistory } from 'react-router-dom';


const Navbar = () => {
    const history = useHistory();
    const logout = () => {
        localStorage.clear();
        history.push('/login');
    }

    
    return ( 
        <div className="cnavbar">
        <span className="logo"></span>
            <div className="nav-links">

            { 
                localStorage.getItem('email')===null && 
                <NavLink className="navbarItem" to="/login" activeClassName="active">Login / Signup</NavLink>
            }

            { 
                localStorage.getItem('email')!==null && 
                <NavLink className="navbarItem" to="/availed" activeClassName="active">home</NavLink>
            }

            <NavLink className="navbarItem" to="/about" activeClassName="active">about</NavLink>
            <NavLink className="navbarItem" to="/contact-us" activeClassName="active">contact us</NavLink>
            <NavLink className="navbarItem" to="/plans" activeClassName="active">plans</NavLink>
    
            </div>

        {
            localStorage.getItem('email')!==null && 
            <div className="right-buttons">            
                <Link to="/settings/profile" ><i className="fa fa-user setting-btn"></i></Link>
                <span onClick={() => { logout(); } }><i className="fa fa-sign-out logout-btn"></i></span>
            </div>
        }             
        
        <span></span>
        </div>
     );
}
 
export default Navbar;