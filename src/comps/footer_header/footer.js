import { Link } from 'react-router-dom';

const Footer = () => {
    return ( 
        <div className="footer-container">
            <div className="footer-left">
                <Link to="#"  className="footer-element">Privacy</Link>
                <Link to="#" className="footer-element">Terms</Link>                
            </div>
            <div className="footer-right">
                <Link to="#" className="footer-element">Copyrights 2021-2021 @ Scholarship Provider</Link>
            </div>
        </div>
     );
}
 
export default Footer;