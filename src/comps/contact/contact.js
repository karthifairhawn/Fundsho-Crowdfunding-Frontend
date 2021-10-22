import React from 'react';
import './contact.css';
class Contact extends React.Component{
    componentDidMount(){
        let home = document.getElementById('ni-home');
        let contact = document.getElementById('ni-contact');
        let plan = document.getElementById('ni-plan');
        let about = document.getElementById('ni-about');

        home.classList.remove("active");
        contact.classList.add("active");
        plan.classList.remove("active");
        about.classList.remove("active");
    }
    render(){
        return(            
            <div className="contact-us">
                <div class="gears" id="one-gear">    
                    <div class="gears-container">
                        <div class="gear-rotate"></div>
                    </div>                                                        
                </div>                
                Under Construction...
            </div>
        );
    }
}

export default Contact;