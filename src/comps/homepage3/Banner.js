import {Link} from 'react-router-dom'

    function scrollToDonate(){
        window.scrollTo(0, window.scrollY+450);
    }
const Banner = () => {
    return ( 
        <div className="hero-banner">   
        <div className="hero-banner-text">
            <span className="bold">COME, LAY THE FOUNDATION OF EDUCATION</span>                    
            <span>Let us build a educated nation, together</span>
            <br />
            <br />
            <div className="d-flex flex-wrap">
                <button onClick={scrollToDonate} className="donate-btn m-1">Donate Now</button>     
                <Link to="/newrequest">
                    <button className="fundraiser-btn m-1">Became a Fundraiser</button>         
                </Link>       
            </div>
        </div>
    </div>
     );
}
 
export default Banner;