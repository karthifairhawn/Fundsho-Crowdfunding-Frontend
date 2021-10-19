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



  
    render() {
        return (
        
            <div className="availed-list-container">                
                    <div className="al-main-container">
                        
                        <div className="availed-element">                            
                            <div className="al-arrows">
                                <i class="fas fa-arrow-circle-up"></i>
                                <span className="up-count">3</span>
                                <i class="fas fa-arrow-circle-down"></i>
                            </div>
                            <div className="al-vr-line"></div>
                            <div className="al-right-info">
                                <div className="al-title">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
                                </div>
                                <hr />
                                <div className="al-description">

                                </div>
                            </div>
                        </div>

                    </div>                
            </div>
        );
    }
}



export default AvailedList;