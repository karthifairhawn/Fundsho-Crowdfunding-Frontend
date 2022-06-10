import { Container,Row,Col } from "react-bootstrap";
import Navbar from "../footer_header/navbar";
import { Box } from '@mui/material';
import { useState,useEffect } from "react";
import { ProgressBar } from "react-bootstrap";
import TextField from '@mui/material/TextField';
import { APIIP } from "../settings/config";
import { useParams } from "react-router-dom";
import DonateModal from "../homepage3/DonateModel";



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
    const [requestInformations, setRequestInformations] = useState('');

    const {reqId}  = useParams();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function loadData(){
        // console.log(reqId);
        // fetch(APIIP.ip+"/singlerequest/"+reqId)
        // .then((response) => response.json())
        // .then((response) => {setPageInformation(response); console.log(response);})    
    }

    useEffect(() => {
    
        fetch(APIIP.ip+"/requests/"+reqId)
        .then((response) => response.json())
        .then((response) => {setRequestInformations(response); console.log(response);})    
    },[reqId])
    return ( 

        
        <>
            <Navbar/>
            <div className="single-page-container">
                <h2>{requestInformations.eventTitle}</h2>
                
                <Container fluid="sm">
                    <Row>
                        <Col md={8} lg={8} sm={12} xs={12} >                        
                            <div className="sp-left-container">
                            <img src={requestInformations.eventImageUrl} className="srp-cover" alt="Fundraiser img" />

                            <div className="share-fr-row">
                                <div></div>                    
                                <button className="share-fundraiser">
                                    <i className="fa fa-share-alt" aria-hidden="true"></i>                                    
                                    <span>Share Fundraiser</span>                                                                         
                                </button>
                            </div>

                            <Box sx={{ width: '100%', typography: 'body1' }}>
                           
                            </Box>
                            </div>

                            <br />
{/* 
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
                            </div> */}





                            <br />
                            <div className="comment-section">
                                <div className="title">Event Information</div>    
                                <hr />
                                <div className="bc-sub-row">
                                    <div className="bc-sub-title">
                                        <span className="bold">Event Title: </span>
                                        <span>{requestInformations.eventTitle}</span>
                                    </div>    
                                    <br />                              
                                    <div className="bc-sub-title">
                                        <span className="bold">Event Date: </span>
                                        <span>{requestInformations.deadLine}</span>
                                    </div>
                                    <br />
                                    <div className="bc-sub-title">
                                        <span className="bold">Additional Files: </span>
                                        <span>{requestInformations.addtionalFilesUrl}</span>
                                    </div>
                                    <br />
                                    <div className="bc-sub-title">
                                        <span className="bold">Event Description: </span>
                                        <span>{requestInformations.eventDescription}</span>
                                    </div>
                                </div>                            
                            </div>

                            <br />

                            <div className="comment-section">
                                <div className="title">Educational Details</div>
                                <hr />
                                <div className="bc-sub-row">
                                    <br />
                                    <div className="bc-sub-title">
                                        <span className="bold">Education Field: </span>
                                        <span>{requestInformations.studyProgram}</span>
                                    </div>
                                    <br />
                                    <div className="bc-sub-title">
                                        <span className="bold">Education Institute: </span>
                                        <span>{requestInformations.institutionName}</span>
                                    </div>
                                    <br />
                                    <div className="bc-sub-title">
                                        <span className="bold">Education City: </span>
                                        <span>{requestInformations.institutePlace}</span>
                                    </div>
                                    <br />
                                    <div className="bc-sub-title">
                                        <span className="bold">More about education: </span>
                                        <span>{requestInformations.institutionName}</span>
                                    </div>
                                    <br />
                                </div> 
                            </div>   
                            <br />

                            <div className="comment-section">
                                <div className="title">Contact Information</div>
                                <hr />
                                <div className="bc-sub-row">                                        
                                    <div className="bc-sub-title">
                                        <span className="bold">Fundraiser Name: </span>
                                        <span>{requestInformations.fname + ' ' + requestInformations.lname}</span>
                                    </div>
                                    <br />
                                    <div className="bc-sub-title">
                                        <span className="bold">Fundraiser Email: </span>
                                        <span>{requestInformations.personalEmail}</span>
                                    </div>
                                    <br />
                                    <div className="bc-sub-title">
                                        <span className="bold">Fundraiser Phone: </span>
                                        <span>{requestInformations.phoneNumber}</span>
                                    </div>
                                    <br />
                                    <div className="bc-sub-title">
                                        <span className="bold">Fundraiser Additional Information: </span>
                                        <span>{requestInformations.background}</span>
                                    </div>                                        
                                </div>                                                                                        
                            </div>

                        </Col>


                        <Col md={4} lg={4} sm={12} xs={12} >

                            
                            {
                                parseInt(localStorage.getItem('userId'))!==requestInformations.userId
                                ?
                                <DonateModal req={requestInformations} updateFunction={loadData}/>    
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
                                    <i className="fab fa-whatsapp" aria-hidden="true"></i>
                                    Spread the word
                                </button>
                            </a>

                            <div className="sp-donation-info">
                                <div className="sp-donated-amount">
                                    <span>₹ {requestInformations.amountRecieved}</span>                                
                                </div>
                                <div className="sp-donation-goal">
                                    <span>raised of <b>₹ {requestInformations.amountRequired}</b> goal</span>
                                </div>
                                <ProgressBar now={(requestInformations.amountRecieved/requestInformations.amountRequired) * 100}></ProgressBar>
                                <div className="supporters-days">
                                    <span><b>{requestInformations.votes}</b>Votes</span>
                                    <span><b>{calculateDaysBetweenDates(requestInformations.deadLine)}</b> days left</span>
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