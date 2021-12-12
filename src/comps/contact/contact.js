import React from 'react';
class Contact extends React.Component{
    componentDidMount(){

    }
    render(){
        return(  
            <>
                <div className="contact-us">
                    <div className="title-cu">EMAILUS</div>
                    <form className="form-cu">
                        <div className="name-email-cu">
                            <input type="text" name="name" placeholder="Your Name"/>
                            <input type="email" name="email" id="email" placeholder="Your Email"/>
                        </div>
                        <div className="your-message-cu">
                            <textarea name="message" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className="submit-btn-cu">
                            <input type="submit" value="Send Message"/>
                        </div>
                    </form>
                </div>
                <hr />  
            </>         
        );
    }
}

export default Contact;