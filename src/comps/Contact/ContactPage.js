import { useEffect } from "react";
import Navbar from "../Footers_Header/navbar";
import {APIIP} from "../Settings/config";

const Contact = () => {
  function submitForm(e){
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let data = {
      name: name,
      email: email,
      data: message      
    }
    fetch(APIIP.ip+"/contactinfo?sessionKey="+localStorage.getItem("sessionKey"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(response => {
      if(response.status === 200){
        alert("Message sent successfully");
        document.getElementById("name").value ="";
        document.getElementById("email").value ="";
        document.getElementById("message").value ="";
      }else{
        alert("Message not sent");
      }
    })

  }
  useEffect(()=>{
    console.log("run");
  },[])
  return ( 
    
    <div className="cup">
      <Navbar/>
      <section id="contact">
        <div className="contact-box">
          <div className="contact-links">
            <h2>CONTACT</h2>
            <div className="links">
              <div className="link">
                <a href="http://google.com"><img src="https://i.postimg.cc/m2mg2Hjm/linkedin.png" alt="linkedin"/></a>
              </div>
            <div className="link">
              <a  href="http://google.com"><img src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github"/></a>
            </div>
            <div className="link">
              <a  href="http://google.com"><img src="https://i.postimg.cc/W4Znvrry/codepen.png" alt="codepen"/></a>
            </div>
            <div className="link">  
              <a  href="http://google.com"><img src="https://i.postimg.cc/NjLfyjPB/email.png" alt="email"/></a>
            </div>
          </div>
      </div>
      <div className="contact-form-wrapper">
      <form>
        <div className="form-item">
          <input type="text" name="name" id="name" required/>
          <label>Name:</label>
        </div>
        <div className="form-item">
          <input type="text" name="email" id="email" required/>
          <label>Email:</label>
        </div>
        <div className="form-item">
          <textarea className="" name="message" id="message" required></textarea>
          <label>Message:</label>
        </div>
        <button onClick={(e)=> submitForm(e)} className="submit-btn">Send</button>  
    </form>
  </div>
</div>
</section>
  </div>
   );
}

export default Contact;