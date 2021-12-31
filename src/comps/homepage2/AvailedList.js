// import React, { useState,useEffect } from 'react';
// import Request from './Request.js';
// import {NavLink, Route,useLocation,useHistory } from 'react-router-dom';
// import {APIIP} from '../settings/config';
// import SinglePageRequest from './SinglePageRequest';
// import { Carousel } from 'react-bootstrap';


// import NewRequestButton from './NewRequestButton';

// const AvailedList = () => {

//     const history = useHistory();
//     const location = useLocation();

//     let path = location.pathname;                
        
//     const [data,setData] = useState({});
//     const [ownData,setOwnData] = useState({});
//     const [reRender,setReRender] = useState(true);

//     function reRenderWallet(){        
//         setTimeout(() =>{setReRender(!reRender);},2000)
//     }

//     useEffect(() => {
//         fetch(APIIP.ip+"/requests")
//         .then((response) => response.json())
//         .then((response) => {
//             setData(response);
//         });

//         fetch(APIIP.ip+"/requests/"+localStorage.getItem("userId"))
//         .then((response) => response.json())
//         .then((response) => {
//             setOwnData(response);
//         });
                        
//     },[reRender]);

//     if(path==='/availed'){
//         history.push("/availed/all")
//     }

//     return (


        
//         <div className="home-container">

//             <Carousel>
//                 <Carousel.Item>
//                     <img
//                     className="d-block w-100"
//                     src="holder.js/800x400?text=First slide&bg=373940"
//                     alt="First slide"
//                     />
//                     <Carousel.Caption>
//                     <h3>First slide label</h3>
//                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img
//                     className="d-block w-100"
//                     src="holder.js/800x400?text=Second slide&bg=282c34"
//                     alt="Second slide"
//                     />

//                     <Carousel.Caption>
//                     <h3>Second slide label</h3>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img
//                     className="d-block w-100"
//                     src="holder.js/800x400?text=Third slide&bg=20232a"
//                     alt="Third slide"
//                     />

//                     <Carousel.Caption>
//                     <h3>Third slide label</h3>
//                     <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//             </Carousel>
//             {/* <div className="requests-sidebar">
//                 <NavLink className="left-pane-setting-options-btn sidebar-item" to="/availed/all" activeClassName="active-pane-link">All Requests</NavLink>
//                 <NavLink className="left-pane-setting-options-btn sidebar-item" to={"/availed/"+localStorage.getItem("userId")} activeClassName="active-pane-link">Your Requests</NavLink>                                
//             </div>      */}

//             <Route path="/availed/all">
//                 <div className="availed-list-container">
//                 <h6 className="white title">Featured Fundraisers</h6>   
//                     <div className="list-card-body">                        
//                         <div className="home-card-container">                            
//                             <div className="home-card">
//                                 <div className="home-card-body">
//                                 <span className="tag tag-teal">Udemy</span>
//                                 <h4>
//                                     Why is the Tesla Cybertruck designed the way it
//                                     is?
//                                 </h4>
//                                 <p>
//                                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestias placeat qui ipsum necessitatibus sit cumque ipsa! Vero reprehenderit inventore hic modi recusandae labore rem ad harum, nemo dolorem esse?
//                                 </p>
//                                 <div className="user">
//                                     <img src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo" alt="user" />
//                                     <div className="user-info">
//                                     <h5>Sigma Mordez</h5>
//                                     <small>Today</small>
//                                     </div>
//                                 </div>
//                                 </div>
//                             </div>

//                             <div className="home-card">
//                                 <div className="home-card-body">
//                                 <span className="tag tag-teal">Udemy</span>
//                                 <h4>
//                                     Why is the Tesla Cybertruck designed the way it
//                                     is?
//                                 </h4>
//                                 <p>
//                                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestias placeat qui ipsum necessitatibus sit cumque ipsa! Vero reprehenderit inventore hic modi recusandae labore rem ad harum, nemo dolorem esse?
//                                 </p>
//                                 <div className="user">
//                                     <img src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo" alt="user" />
//                                     <div className="user-info">
//                                     <h5>Sigma Mordez</h5>
//                                     <small>Today</small>
//                                     </div>
//                                 </div>
//                                 </div>
//                             </div>

                            

//                             <div className="home-card">
//                                 <div className="home-card-body">
//                                 <span className="tag tag-teal">Udemy</span>
//                                 <h4>
//                                     Why is the Tesla Cybertruck designed the way it
//                                     is?
//                                 </h4>
//                                 <p>
//                                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestias placeat qui ipsum necessitatibus sit cumque ipsa! Vero reprehenderit inventore hic modi recusandae labore rem ad harum, nemo dolorem esse?
//                                 </p>
//                                 <div className="user">
//                                     <img src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo" alt="user" />
//                                     <div className="user-info">
//                                     <h5>Sigma Mordez</h5>
//                                     <small>Today</small>
//                                     </div>
//                                 </div>
//                                 </div>
//                             </div>

//                         </div>                        
//                     </div>
//                 </div>                
//             </Route> 

//             {/* <Route path="/availed/all">
//                 <div className="availed-list-container">    

//                 {
//                     Object.entries(data).map((item,idx) => {                               
//                         return(
                            
//                         <Route key={idx} path={"/availed/all/"+item[1][9]}>
                        
//                             <SinglePageRequest 
//                                 user={item[1][0]} 
//                                 key={idx} 
//                                 title={item[1][1]} 
//                                 desc={item[1][2]} 
//                                 bonafide={item[1][3]} 
//                                 additional={item[1][4]}                         
//                                 vote={item[1][5]}
//                                 amountAlready={item[1][6]}                                
//                                 amountTotal={item[1][7]} 
//                                 date={item[1][8]}    
//                                 reqId={item[1][9]}   
//                                 reRenderFunction={reRenderWallet}
//                             />
//                         </Route>    
//                         );                
//                     })  
//                 }
                

//                 <Route exact path="/availed/all">
//                     <div className="al-main-container">                
//                         {     
//                             Object.entries(data).map((item,idx) => (                                                     
//                                 <Request 
//                                 user={item[1][0]} 
//                                 key={idx} 
//                                 title={item[1][1]} 
//                                 desc={item[1][2]} 
//                                 bonafide={item[1][3]} 
//                                 additional={item[1][4]}                         
//                                 vote={item[1][5]}
//                                 amountAlready={item[1][6]}                                
//                                 amountTotal={item[1][7]} 
//                                 date={item[1][8]}    
//                                 reqId={item[1][9]}                                             
//                                 />
//                             ))
//                         }
//                     </div>                
//                 </Route>

//                 </div>
//             </Route> */}


            
//             {/* <Route path={"/availed/"+localStorage.getItem("userId")}>                                
//                 <div className="availed-list-container">  
//                         <div className="add-request">

//                         <NewRequestButton/>
                            
//                         </div>                        
//                     <div className="al-main-container">                
//                         {     
//                             Object.entries(ownData).map((item,idx) => (                                                                          
//                                 <Request 
//                                     user={item[1][0]} 
//                                     key={idx} 
//                                     title={item[1][1]} 
//                                     desc={item[1][2]} 
//                                     bonafide={item[1][3]} 
//                                     additional={item[1][4]}                         
//                                     vote={item[1][5]}
//                                     amountAlready={item[1][6]}                                
//                                     amountTotal={item[1][7]} 
//                                     date={item[1][8]}    
//                                     reqId={item[1][9]} 
//                                 />
//                             ))
//                         }
//                     </div>                
//                 </div>
//             </Route> */}
            
//         </div>                
//     );
    
// }



 


// export default AvailedList;
