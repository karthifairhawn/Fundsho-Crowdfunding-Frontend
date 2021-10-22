import React from 'react';
import './AvailedList.css';


class AvailedList extends React.Component {

    componentDidMount() {


        let home = document.getElementById('ni-home');
        let contact = document.getElementById('ni-contact');    
        let about = document.getElementById('ni-about');
        let plan = document.getElementById('ni-plan');
    
        home.classList.add("active");
        contact.classList.remove("active");    
        about.classList.remove("active");
        plan.classList.remove("active");
    }

    upvote(e) {
        let id = e.target.id;
        id = "count"+id.substring(2);
        id = document.getElementById(id);
        id.innerText = parseInt(id.innerText)+1;

    }    
    
    downvote(e) {
        let id = e.target.id
        id = "count"+id.substring(4);
        id = document.getElementById(id);
        id.innerText = parseInt(id.innerText)-1;
    }   

  
    render() {
        return (
        
            <div className="availed-list-container">                
                    <div className="al-main-container">
                        
                        {/* Availed List Element Sample Starts */}

                        <div className="availed-element">                            
                            <div className="al-arrows">
                                <i class="fas fa-arrow-circle-up" id="up1" onClick={this.upvote} ></i>
                                <span className="up-count" id="count1">3</span>
                                <i class="fas fa-arrow-circle-down" id="down1" onClick={this.downvote}></i>
                            </div>
                            <div className="al-vr-line"></div>
                            <div className="al-right-info">
                                <div className="al-title">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
                                </div>
                                <hr />
                                <div className="al-description">
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis beatae, incidunt nesciunt illo sunt quibusdam sequi quidem, provident ea voluptates nemo. Provident architecto quod assumenda laudantium non cum, tempore corrupti.                                          
                                        <ol>
                                            <li>lorem Ipsum</li>
                                            <li>ipsum</li>
                                            <li>lorem ipsume tempus</li>
                                        </ol>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Availed List Element Sample Ends */}                        

                    </div>                
            </div>
        );
    }
}



 


export default AvailedList;