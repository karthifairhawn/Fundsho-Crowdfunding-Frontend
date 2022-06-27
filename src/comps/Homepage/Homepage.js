import SpinLoader from './SpinLoader';
import RequestCard from "./userRequestCard";
import DonateMore from "./donateMoreModal";
import { Link } from 'react-router-dom';
import {useEffect,useState,useLayoutEffect} from 'react';
import {APIIP} from '../Settings/config';
import CardSkeleton from "./cardSkeleton";
import Navbar from "../Footers_Header/navbar";
import Footer from "../Footers_Header/footer";
import { Spinner } from "react-bootstrap";
import Banner from './Banner';


const MainHomepage = () => {

    const [featuredData,setFeaturedData] = useState([]);
    const [allFundraisers,setAllFundraiser] = useState([]);    
    const [moreDataAvailable,setMoreDataAvailable] = useState(true);
    const [currentPage,setCurrentPage] = useState(1);

    useLayoutEffect(() => {
        var ele = document.getElementById("spinloader");
        ele.classList.add("invisible");    
    });
    
    useEffect(() => {
        var ele = document.getElementById("spinloader");
        if(allFundraisers.length>0) ele.classList.remove("invisible");        

        fetch(APIIP.ip+"/requests?page=1&size=3&featured=true",{
            method:"GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            response.json().then(response => {                
                setFeaturedData(response);
            })
        })

        fetch(APIIP.ip+"/requests?page="+currentPage+"&size=9&featured=false",{
            method:"GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            response.json().then(response => {                
                setAllFundraiser(allFundraisers.concat(response));
                if(response.length<9){
                    setMoreDataAvailable(false);
                }
            })
        })

    },[currentPage]);



    function scrollToDonate(){
        window.scrollTo(0, window.scrollY+450);
    }
    
    return ( 
        <>
        <Navbar/>
            
            <SpinLoader/>
                <div className="conatiner">

                <Banner/>



                <div className="d-flex align-center justify-center flex-column width-100 ">                

                    <div className="card">  
                    <div className="card-header h4 fst-italic">Featured Fundraisers</div>   
                        <div className="card-body">                                                    
                            <div className="home-card-container" fallback={<h1>Hello</h1>}>        
                                { featuredData.length<1 && <> <CardSkeleton/> <CardSkeleton/> <CardSkeleton/> </> }
                                { featuredData.map(function (arrayItem,idx) { return <RequestCard key={idx} data={arrayItem}/> })  }                      
                            </div>                        
                        </div>
                    </div>

                    <DonateMore/>

                    <br />

                    <div className="card">                        
                        <div className="card-body d-flex flex-wrap justify-content-center">  

                        { allFundraisers.length<1 &&   <> {Array(8).fill(1).map((el, i) => <CardSkeleton key={i} /> )} </>}                          
                        { allFundraisers.map(function (arrayItem,idx) { return <RequestCard key={idx} idx={idx} data={arrayItem}/> }) }                       

                        </div>                                           
                    </div>   

                </div>                

                <div className="center load-more-btn">
                    {
                        moreDataAvailable &&                        
                        <button  className="center" onClick={() => {setCurrentPage(currentPage + 1);}}>
                            Load More Fundraisers &nbsp;
                            <i className="fa fa-angle-double-down" aria-hidden="true"></i>
                        </button>       
                    }
                </div>        
                <Footer/>
                </div>
                
        </>        
     );
}
 
export default MainHomepage;