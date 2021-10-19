import './navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return ( 
        <div className="cnavbar">
            <Link to="/" className="navbarItem active" id="ni-home">Home</Link>
            <Link to='/about' className="navbarItem" id="ni-about">About</Link>            
            <Link to='/contact-us' className="navbarItem" id="ni-contact">contact us</Link>                   
            <Link to='/plans' className="navbarItem" id="ni-plan">plan</Link>     
        </div>
     );
}
 
export default Navbar;