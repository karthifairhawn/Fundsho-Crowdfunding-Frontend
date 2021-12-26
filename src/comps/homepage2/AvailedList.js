import React, { useState,useEffect } from 'react';
import Request from './Request.js';
import {APIIP} from '../settings/config';

const AvailedList = () => {
        
    const [data,setData] = useState({});

    useEffect(() => {
        fetch(APIIP.ip+"/requests")
        .then((response) => response.json())
        .then((response) => {
            setData(response);
        });
                        
    },[]);

    return (
    
        <div className="availed-list-container">                
            <div className="al-main-container">                
                {     
                    Object.entries(data).map((item,idx) => (                          
                        <Request 
                        user={item[1][0]} 
                        key={idx} 
                        title={item[1][1]} 
                        desc={item[1][2]} 
                        bonafide={item[1][3]} 
                        additional={item[1][4]}                         
                        vote={item[1][5]}
                        amountAlready={item[1][6]}
                        amountRequired={item[1][7]}
                        amountTotal={item[1][8]} 
                        date={item[1][9]}                                             
                        />
                    ))
                }
            </div>                
        </div>
    );
    
}



 


export default AvailedList;
