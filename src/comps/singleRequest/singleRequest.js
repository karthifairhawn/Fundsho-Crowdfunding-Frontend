import { Container,Row,Col } from "react-bootstrap";
import Navbar from "../footer_header/navbar";
import { Tab,Box } from '@mui/material';
import { TabPanel,TabContext,TabList } from '@mui/lab';
import { useState,useEffect } from "react";
import { ProgressBar } from "react-bootstrap";
import TextField from '@mui/material/TextField';
import { APIIP } from "../settings/config";
import { useParams } from "react-router-dom";
import DonateModal from "../homepage3/DonateModel";
import {
    EmailShareButton,
    FacebookShareButton} from "react-share";


const SingleRequest = () => {

    function calculateDaysBetweenDates(date2) {
        let date1 = new Date().getTime();
        if(date2===null || date2===undefined) return "";
        date2 = date2.split("T")[0].split("-").reverse();    
        [date2[0],date2[1]] = [date2[1],date2[0]]
        date2 = new Date(date2.join("-"));
        date2 = date2.getTime();

        var oneDay = 24 * 60 * 60 * 1000;        
        var days = Math.round(Math.abs(date1 - date2) / oneDay);
        return days;
      }


    const [value, setValue] = useState('1');
    const [pageInformation, setPageInformation] = useState({})

    const {reqId}  = useParams();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function loadData(){
        console.log(reqId);
        fetch(APIIP.ip+"/singlerequest/"+reqId)
        .then((response) => response.json())
        .then((response) => {setPageInformation(response); console.log(response);})    
    }

    useEffect(() => {
        console.log(reqId);
        fetch(APIIP.ip+"/singlerequest/"+reqId)
        .then((response) => response.json())
        .then((response) => {setPageInformation(response); console.log(response);})    
    },[])
    return ( 

        
        <>
            <Navbar/>
            <div className="single-page-container">
                <h2>{pageInformation.eventTitle}</h2>
                
                <Container fluid="sm">
                    <Row>
                        <Col md={8} lg={8} sm={12} xs={12} >                        
                            <div className="sp-left-container">
                            <img src={pageInformation.imageUrl} className="srp-cover" alt="Fundraiser img" />
                            <div className="share-fr-row">
                                <div></div>                    
                                <button className="share-fundraiser">
                                    <i className="fa fa-share-alt" aria-hidden="true"></i>
                                    
                                        <span>
                                            Share Fundraiser
                                        </span>                                                                         
                                </button>
                            </div>

                            <Box sx={{ width: '100%', typography: 'body1' }}>
                            <TabContext value={value}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                                        <Tab label="About" value="1" />
                                        <Tab label="Educational Info" value="2" />                                        
                                        <Tab label="Personal Info" value="3" />
                                    </TabList>
                                </Box>
                                <TabPanel value="1">
                                    <div className="header sp-content" >
                                        <h3>Words from Fundraiser</h3>

                                    

                                        <p>
                                            {pageInformation.eventDescription}                                            
                                        </p>                                        
                                        <div className="share-buttons">
                                            <a href={"https://api.whatsapp.com/send?text="+window.location.href} target="_blank" rel="noreferrer"><button className="wapp-share">
                                                <i class="fa fa-whatsapp" aria-hidden="true"></i>
                                                Share
                                            </button></a>
                                            <a href={"https://www.facebook.com/sharer/sharer.php?u="+window.location.href} target="_blank" rel="noreferrer"><button className="fb-share">
                                            <i class="fa fa-facebook-official" aria-hidden="true"></i>
    

                                                Share
                                            </button></a>
                                            <a href={"https://twitter.com/intent/tweet?url="+window.location.href} target="_blank" rel="noreferrer"><button className="twitter-share">
                                            <i class="fa fa-twitter-square" aria-hidden="true"></i>
                                                Share
                                                </button></a>
                                        </div>
                                    </div>
                                </TabPanel>



                                <TabPanel value="2">
                                    <div className="educational-info">

                                        <span>{pageInformation.institutionName}</span>                                        
                                        <span>{pageInformation.institutePlace}</span>
                                        <span>{pageInformation.studyProgram}</span>
                                        <span>{pageInformation.cgpa}</span>

                                    </div>
                                </TabPanel>
                                <TabPanel value="3">
                                
                                <div className="sp-personalInfo">
                                    <div className="name">
                                        <span className="bold">Name :</span>      
                                        <span>{pageInformation.fname+" "+pageInformation.lname}</span>                                  
                                    </div>

                                    <div className="name">
                                        <span className="bold">Gender :</span>      
                                        <span>{pageInformation.gender}</span>                                  
                                    </div>

                                    <div className="name">
                                        <span className="bold">Father :</span>      
                                        <span>{pageInformation.fatherName} / {pageInformation.fatherOccupation}</span>                                  
                                    </div>

                                    <div className="name">
                                        <span className="bold">Household Income :</span>      
                                        <span>{pageInformation.annualSalary}</span>                                  
                                    </div>

                                    <div className="name">
                                        <span className="bold">Age :</span>      
                                        <span>{Math.floor(calculateDaysBetweenDates(pageInformation.dateOfBirth)/365)}</span>                                  
                                    </div>
                                    <br />

                                    <div className=""><h5>Contact Information</h5></div>

                                    <div className="name">
                                        <span className="bold">Phone :</span>      
                                        <span>{pageInformation.phoneNumber}</span>                                                                          
                                    </div>

                                    <div className="name">
                                        <span className="bold">City :</span>      
                                        <span>{pageInformation.city} - {pageInformation.pinCode}</span>                                                                          
                                    </div>

                                    <div className="name">
                                        <span className="bold">State :</span>      
                                        <span>{pageInformation.stateRegion}</span>                                                                          
                                    </div>

                                    <div className="name">
                                        <span className="bold">Email :</span>      
                                        <span>{pageInformation.personalEmail}</span>                                                                           
                                    </div>  
                                </div>                                                                                                          
                                </TabPanel>
                            </TabContext>
                            </Box>
                            </div>

                            <br />

                            <div className="direct-donation">
                                <div className="title">Direct Donation</div>

                                <div className="dd-info">
                                    <span className="bold">
                                        Transfer directly to the Bank account of this Fundraiser. Only INR transfers are allowed.
                                    </span>

                                    <div className="dd-main-content">
                                        <div className="bank-img">
                                            <i className="fa fa-university" aria-hidden="true"></i> 
                                        </div>
                                        <div className="bank-info">
                                            <div className="name">
                                                <span className="bold">Virtual A/C No :</span>      
                                                <span>6999413500366181</span>                                                                          
                                            </div>
                                            <div className="name">
                                                <span className="bold">Virtual A/C Name:</span>      
                                                <span>AISHA NAZIA NASIR MAYIN-Ketto</span>                                                                          
                                            </div>
                                            <div className="name">
                                                <span className="bold">A/C Type :</span>      
                                                <span>Current</span>                                                                          
                                            </div>
                                            <div className="name">
                                                <span className="bold">IFSC :</span>      
                                                <span>YESB0CMSNOC</span>                                                                          
                                            </div>
                                        </div>
                                    </div>                                    
                                </div>
                            </div>
                            <br />
                            <div className="comment-section">
                                <div className="title">Comments</div>  
                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>    

                                    <div className="comment-box">
                                        <TextField id="input-with-sx" label="Type your public comment" variant="standard">                                        
                                        </TextField>
                                        <button className="card-donate-btn">Comment</button>
                                    </div>                                
                                    
                                    <div className="posted-comments">
                                        
                                    </div>


                                </Box>                              
                            </div>
                        </Col>


                        <Col md={4} lg={4} sm={12} xs={12} >

                            
                            {
                                parseInt(localStorage.getItem('userId'))!==pageInformation.userId
                                ?
                                <DonateModal req={pageInformation} updateFunction={loadData}/>    
                                :
                                ''
                            }
                            


                            <div className="payment-options">
                                <div className="credit-card">
                                </div>
                                <div className="net-banking">                                    
                                </div>
                                <div className="direct-bank">                                
                                </div>
                                <div className="upi">                                    
                                </div>
                            </div>
                            <a href={"https://api.whatsapp.com/send?text="+window.location.href} target="_blank" rel="noreferrer">
                                <button className="fb-share-right">
                                    <i class="fa fa-whatsapp" aria-hidden="true"></i>
                                    Spread the word
                                </button>
                            </a>

                            <div className="sp-donation-info">
                                <div className="sp-donated-amount">
                                    <span>₹ {pageInformation.amountRecieved}</span>                                
                                </div>
                                <div className="sp-donation-goal">
                                    <span>raised of <b>₹ {pageInformation.amountRequired}</b> goal</span>
                                </div>
                                <ProgressBar now={(pageInformation.amountRecieved/pageInformation.amountRequired) * 100}></ProgressBar>
                                <div className="supporters-days">
                                    <span><b>{pageInformation.votes}</b>Votes</span>
                                    <span><b>{calculateDaysBetweenDates(pageInformation.deadLine)}</b> days left</span>
                                </div>
                            </div>
                        </Col>

                    </Row>                    
                </Container>
                <div className="empty-space"></div>
            </div>
        </>
     );
}
 
export default SingleRequest;