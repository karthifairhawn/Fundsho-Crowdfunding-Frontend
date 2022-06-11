import { Container,Row,Col } from "react-bootstrap";
import Navbar from "../footer_header/navbar";
import { Box } from '@mui/material';
import { useState,useEffect } from "react";
import { ProgressBar } from "react-bootstrap";
import { APIIP } from "../settings/config";
import { useParams } from "react-router-dom";
import DonateModal from "../homepage3/DonateModel";

import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import confetti from "canvas-confetti";
import SpinLoader from "../homepage3/SpinLoader";





const DonorBox = (idx) => {
    var donor = idx.donor;



    return (         
        <>        
        <Card sx={{ minWidth: 275 }} id={idx.index}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom> Donor Name: {donor.donorName}</Typography>                                        
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom> Amount: {donor.amount}</Typography>                                                                                                                        
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom> Donation Comment: {donor.description}</Typography>                                                                                                                        
            </CardContent>
            <CardActions>
                <Button size="small">View user.</Button>
            </CardActions>
        </Card>
        <br />
        </>
     );
}
 

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



    const [requestInformations, setRequestInformations] = useState('');
    const [donations, setDonations] = useState([]);
    

    const {reqId}  = useParams();


    function reloadRequest(){
        fetch(APIIP.ip+"/requests/"+reqId)
        .then((response) => response.json())
        .then((response) => {setRequestInformations(response); })   
        
        fetch(APIIP.ip+"/requests/"+reqId+"/donations")
        .then((response) => response.json())
        .then((response) => {setDonations(response); })  

        
        var end = Date.now() + (2 * 1000);

        // go Buckeyes!
        var colors = ['#bb0000', '#ffffff'];
        
        (function frame() {
          confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
          });
          confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
          });
        
          if (Date.now() < end) {
            requestAnimationFrame(frame);
          }
        }());    
    }

    useEffect(() => {
        var ele = document.getElementById("spinloader");
        setTimeout(() => {
            ele.classList.add("invisible");    
        }, 1000);        
    },[requestInformations])

    useEffect(() => {    
        fetch(APIIP.ip+"/requests/"+reqId)
        .then((response) => response.json())
        .then((response) => {
            setTimeout(() => {
                setRequestInformations(response);                 
            }, 300);            
        })    
        fetch(APIIP.ip+"/requests/"+reqId+"/donations")
        .then((response) => response.json())
        .then((response) => {setDonations(response); })    

    },[])

   
    return ( 

        
        <>
            
            <SpinLoader />
            
            <Navbar/>
            <div className="single-page-container">
                <div className="single-page-header d-flex justify-content-between align-items-center">
                    <i class="fa-solid fa-circle-arrow-left fs-2 p-2" style={{color:"#cecfd0"}}></i>
                    <h2>{requestInformations.eventTitle}</h2>
                    <div></div>                
                </div>

                <hr />
                
                <Container fluid="sm">
                    <Row>
                        <Col md={8} lg={8} sm={12} xs={12} >                        
                            <div className="sp-left-container">
                            <img src={requestInformations.eventImageUrl} className="srp-cover" alt="Fundraiser img" />

                            <div className="d-flex justify-content-between">

                                <button className="share-fundraiser m-2">
                                    <i className="fa-solid fa-thumbs-up"></i>                                  
                                    &nbsp;
                                    <span onClick={()=> alert('Voting Feature is currently disable due to spamming.')} >Support Fundraiser</span>                                                                         
                                </button>

                                <button className="share-fundraiser">
                                    <i className="fa fa-share-alt" aria-hidden="true"></i>                                    
                                    <span on>Share Fundraiser</span>                                                                         
                                </button>
                            </div>

                            <Box sx={{ width: '100%', typography: 'body1' }}>
                           
                            </Box>
                            </div>

                            <br />

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
                            
                            { (requestInformations.amountRequired-requestInformations.amountRecieved)>0 ? <DonateModal req={requestInformations} updateFunction={reloadRequest}/> : 
                            <div className="card">
                                <div className="card-body">
                                <div className="donate-btn">
                                    <div className="title">Fundraising Closed</div>
                                    <div className="btn-content">
                                        <div className="btn-text">
                                            <span className="bold">{
                                                (requestInformations.amountRequired-requestInformations.amountRecieved)===0 ? 'Fundraising Closed - recieved required amount' : 'Fundraising Closed'
                                            }</span>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>

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
                                    <span><b>{requestInformations.votes}</b>Supports</span>
                                    <span><b>{calculateDaysBetweenDates(requestInformations.deadLine)}</b> days left</span>
                                </div>
                            </div>

                            
                            <div className="recent-donations">
                                <div className="title">Recent Donations <i className="fas fa-donate"></i></div>
                                <hr />
                                
                                <div className="donations-box d-flex flex-column-reverse">

                                {donations.map(function(donation, index){
                                        
                                        return  <DonorBox index={index} donor={donation}/>
                                    
                                })}

                                {
                                    donations.length ===0 ? 
                                    
                                        <div>
                                            <Typography variant="h6" gutterBottom>
                                                No donations has been made yet.
                                            </Typography>
                                        </div>
                                    : 
                                    ''
                                     
                                }
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