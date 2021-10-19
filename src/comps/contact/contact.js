import React from 'react';
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
            <div className="about-content">
                This is contact page content
            </div>
        );
    }
}

export default Contact;