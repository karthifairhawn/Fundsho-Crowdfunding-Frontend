import React, { useState,useEffect } from 'react';
import Request from './Request.js';
import {NavLink, Route,useLocation,useHistory } from 'react-router-dom';
import {APIIP} from '../settings/config';

const AvailedList = () => {

    const history = useHistory();
    const location = useLocation();

    let path = location.pathname;
    
    
    
    
        
    const [data,setData] = useState({});
    const [ownData,setOwnData] = useState({});

    useEffect(() => {
        fetch(APIIP.ip+"/requests")
        .then((response) => response.json())
        .then((response) => {
            setData(response);
        });

        fetch(APIIP.ip+"/requests/"+localStorage.getItem("userId"))
        .then((response) => response.json())
        .then((response) => {
            setOwnData(response);
        });
                        
    },[]);

    if(path==='/availed'){
        history.push("/availed/all")
        // return <Redirect to="/availed/all" />
        // window.location.href = "/availed/all";
    }

    return (
        <div className="home-container  no-center">
            <div className="requests-sidebar">
                <NavLink className="left-pane-setting-options-btn sidebar-item" to="/availed/all" activeClassName="active-pane-link">All Requests</NavLink>
                <NavLink className="left-pane-setting-options-btn sidebar-item" to={"/availed/"+localStorage.getItem("userId")} activeClassName="active-pane-link">Your Requests</NavLink>                                
            </div>     

            <Route path="/availed/all">
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
            </Route>


            
            <Route path={"/availed/"+localStorage.getItem("userId")}>
                <div className="availed-list-container">                          
                    <div className="al-main-container">                
                        {     
                            Object.entries(ownData).map((item,idx) => (                          
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
            </Route>
            
        </div>                
    );
    
}



 


export default AvailedList;
