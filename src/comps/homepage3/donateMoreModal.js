import { Link } from "react-router-dom";
const DonateMore = () => {
    return (
        <div className="donate-more-body">
            <div className="donate-more-card">
                <div className="donate-more-main-container">
                    <div><img src="https://ketto.gumlet.io/assets/images/Sip-banner-people/girls-sip.png?w=160&amp;dpr=1.3" alt="donate-more"/></div>
                    <div className="donate-more-right-container">
                        <span className="donate-more-content">What's more than educating one student</span>                        
                        <span className="donate-more bold">Donate More !</span>
                        <Link to='/settings/email'><button className="teal">Subscripe Fundsho</button></Link>
                    </div>
                </div>      

                <div className="donate-more-main-contact-us">
                    <span className="bold">Confused about how to start a Fundraiser?</span>
                    <button className="contact-now-btn">Contact Now</button>
                </div>              
            </div>
        </div>
     );
}
 
export default DonateMore;