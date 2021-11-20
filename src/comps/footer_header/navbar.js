import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ( {active} ) => {

    const nav_items ={
            home: {
                "value": 'home',
                "too": '/'
            },
            about: {
                "value": 'about',
                'too': '/about'
            },
            contact: {
                "value": 'contact us',
                "too": '/contact-us'
            },
            plans : {
                "value": 'plans',
                "too": '/plans'
            }
        }
    

    return ( 
        <div className="cnavbar">
            {/* <h1> {active}</h1> */}

            {
                Object.keys(nav_items).map(function (key,index) {                                        
                    if(nav_items[key].value === active){
                        
                        return <Link to={nav_items[key].too}  key={index} className="navbarItem active" id="ni-home">{nav_items[key].value}</Link>    
                    }
                        return <Link to={nav_items[key].too} key={index} className="navbarItem" id="ni-home">{nav_items[key].value}</Link>    
                    
                     
                })                
            }


        </div>
     );
}
 
export default Navbar;