import RequestCard from "./userRequestCard";
import DonateMore from "./donateMoreModal";
import { Link } from 'react-router-dom';
import {useEffect,useState} from 'react';
import {APIIP} from '../settings/config';
import CardSkeleton from "./cardSkeleton";
import Navbar from "../footer_header/navbar";


const MainHomepage = () => {

    
    const [topThreeData,setTopThreeData] = useState([]);
    const [allFundraisers,setAllFundraiser] = useState([]);    
    const [moreDataAvailable,setMoreDataAvailable] = useState(true);

    useEffect(() => {
        

        fetch(APIIP.ip+'/topthreerequests')
            .then( (response) => {
                return response.json();
            }).then( (response) => {                
                setTimeout(() => {
                    setTopThreeData(response);      
                }, 1000);   
            })

        fetch(APIIP.ip+'/usersrequests/'+localStorage.getItem("userId")+'/0')
        .then( (response) => {
            // console.log(response);
            return response.json();            
        }).then( (response) => { 
            for (let i = response.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [response[i], response[j]] = [response[j], response[i]];
            }                           
            setTimeout(() => {
                setAllFundraiser(response); 
            }, 1000);              
        })
    },[])

    

    function updateFundraisers(page){  
        let url = APIIP.ip+'/usersrequests/'+localStorage.getItem("userId")+'/'+page;
        console.log(url);
        fetch(url)
        .then( (response) => {
            return response.json();
        }).then( (response) => {                
            for (let i = response.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [response[i], response[j]] = [response[j], response[i]];
            }
            if(response.length<8) setMoreDataAvailable(false);
            setAllFundraiser( allFundraisers.concat(response));
            setTimeout(() => {
                window.scrollTo(0, window.scrollY+1000)
            }, 200); 
        })                    
    }

    function scrollToDonate(){
        window.scrollTo(0, window.scrollY+450);
    }
    return ( 
        <>
        <Navbar>
            </Navbar>            
                <div className="conatiner">
                <div className="hero-banner">
                    <div className="hero-banner-text">
                        <span className="bold">COME, LAY THE FOUNDATION OF EDUCATION</span>                    
                        <span>Let us build a educated nation, together</span>
                        <br />
                        <br />
                        <div>
                            <button onClick={scrollToDonate} className="donate-btn">Donate Now</button>     
                            <Link to="/newrequest"><button className="fundraiser-btn">Became a Fundraiser</button>         </Link>       
                        </div>
                    </div>
                </div>



                <div className="homepage-card">                

                    <h6 className="home-title title bold">Featured Fundraisers</h6>   
                    <div className="list-card-body">                        
                        <div className="home-card-container">        

                        {topThreeData.length<1 && 
                        <>
                            <CardSkeleton/>
                            <CardSkeleton/>
                            <CardSkeleton/>
                        </>
                        }
                        {
                        topThreeData.map(function (arrayItem,idx) {
                            return <RequestCard key={idx} data={arrayItem}/>
                        })  

                        }                      
                        </div>                        
                    </div>

                    <DonateMore/>

                    <br />

                    <div className="list-card-body">                        
                        <div className="home-card-container">  
                        {allFundraisers.length<1 && 
                        <>
                            <CardSkeleton/>
                            <CardSkeleton/>
                            <CardSkeleton/>
                            <CardSkeleton/>
                            <CardSkeleton/>
                            <CardSkeleton/>
                            <CardSkeleton/>
                            <CardSkeleton/>                        
                        </>
                        }                          
                        {
                            allFundraisers.map(function (arrayItem,idx) {
                                // if(arrayItem.userId!== parseInt(localStorage.getItem("userId"))){
                                    return <RequestCard key={idx} data={arrayItem}/>
                                // }                                
                            })  
                        }                       

                        </div>                                           
                    </div>                                                         
                </div>

                <div className="center load-more-btn">
                    {
                        moreDataAvailable &&
                        <button  className="center" onClick={() =>  updateFundraisers(allFundraisers.length/8)}>                    
                            Load More &nbsp;
                            <i className="fa fa-angle-double-down" aria-hidden="true"></i>
                        </button>       
                    }
                </div>        
                </div>

        </>        
     );
}
 
export default MainHomepage;