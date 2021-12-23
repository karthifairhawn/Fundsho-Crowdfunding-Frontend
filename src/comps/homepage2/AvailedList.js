import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Request from './Request.js';

const AvailedList = () => {

    const [data,setData] = useState([
        {
        requestId: 37,
        userId: 1,
        title: "Hacker Rank Contest Entry Fee",
        requestInfo: "This is requestInfo",
        deadLine: null,
        requestedDate: "2021-12-22T12:06:47.658+00:00",
        votes: 0,
        totalAmount: 100,
        amountAlready: 10,
        amountRequired: 90,
        bonafideUrl: "bonafideUrl",
        additionalUrl: "additionalUrl1"
        },
        {
        requestId: 38,
        userId: 1,
        title: "Spring boot 2021 Udemy Course",
        requestInfo: "This is description",
        deadLine: null,
        requestedDate: "2021-12-22T16:16:44.050+00:00",
        votes: 0,
        totalAmount: 100,
        amountAlready: 10,
        amountRequired: 90,
        bonafideUrl: "bonafideUrl",
        additionalUrl: "additionalUrl2"
        }
        ]);

    useEffect(() => {
        fetch("http://localhost:8080/requests")
        .then((response) => response.json())
        .then((response) => console.log(response));            
    },[]);

    return (
    
        <div className="availed-list-container">                
            <div className="al-main-container">
                
                {     
                    // data.forEach((item,idx) => {
                        
                    //     <Request key={idx} title={item} desc={item.desc} 
                    //     bonafide={item.bonafide} additional={item.additional} 
                    //     user={item.user}/>  
                    // })    

                    Object.entries(data).map((item,idx) => (                        
                        // console.log(item)
                        <Request key={idx} title={item[1].title+" "+idx} desc={item[1].requestInfo} 
                        bonafide={item[1].bonafideUrl} additional={item[1].additionalUrl} 
                        user={item[1].user} vote={item[1].votes}/>                        
                        
                    ))
                }

            </div>                
        </div>
    );
    
}



 


export default AvailedList;
