import RequestCard from "./userRequestCard";
import DonateMore from "./donateMoreModal";
import { Link } from 'react-router-dom';
import {useEffect} from 'react';
import {APIIP} from '../settings/config';


const MainHomepage = () => {

    useEffect(() => {
        fetch(APIIP.ip+'/topthreerequests')
            .then( (response) => {
                return response.json();
            }).then( (response) => {
                console.log(response);
            })
    })
    return ( 
        <div className="conatiner">
            <div className="hero-banner">
                <div className="hero-banner-text">
                    <span className="bold">COME, LAY THE FOUNDATION OF EDUCATION</span>                    
                    <span>Let us build a educated nation, together</span>
                    <br />
                    <br />
                    <div>
                        <Link to=""><button className="donate-btn">Donate Now</button></Link>     
                        <Link to="/newrequest"><button className="fundraiser-btn">Became a Fundraiser</button>         </Link>       
                    </div>
                </div>
            </div>



            <div className="homepage-card">                

                <h6 className="home-title title bold">Featured Fundraisers</h6>   
                <div className="list-card-body">                        
                    <div className="home-card-container">                            
                        <RequestCard/>
                        <RequestCard/>
                        <RequestCard/>                          
                    </div>                        
                </div>

                <DonateMore/>

                <br />

                <div className="list-card-body">                        
                    <div className="home-card-container">                            
                        <RequestCard/>
                        <RequestCard/>
                        <RequestCard/>
                        <RequestCard/>                                                                
                    </div>                        
                </div>


                                            

            </div>

            {/* <SuccessStories/> */}




        </div>
     );
}
 
export default MainHomepage;