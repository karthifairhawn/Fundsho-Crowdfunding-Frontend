import { Link } from "react-router-dom";
const DonateMore = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="card mt-4" >
                <div className="card-body d-flex flex-wrap ">
                    
                    <div className="donate-more-main-container d-xxl-flex" style={{width:'550px'}}>
                        <div className="book-image-parent"><img src="https://i.ibb.co/Kwy4t83/book.png" className="book-image" alt="donate-more"/></div>
                        <div className="donate-more-right-container">
                            <span className="donate-more-content">What's more than educating one student</span>                        
                            <span className="donate-more bold">Donate More !</span>
                            <Link to='/settings/email'><button className="teal">Subscripe Fundsho</button></Link>
                        </div>
                    </div>      

                    <div className="donate-more-main-contact-us">
                        <span className="bold">Confused about how to start a Fundraiser?</span>
                        <Link to="/contact-us"><button className="contact-now-btn">Contact Now</button></Link>
                    </div>              
                    
                </div>
            </div>
        </div>
     );
}
 
export default DonateMore;