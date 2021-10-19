import React from 'react';
import './plans.css';

class Plans extends React.Component{
    componentDidMount(){
      let home = document.getElementById('ni-home');
      let contact = document.getElementById('ni-contact');
      let plan = document.getElementById('ni-plan');
      let about = document.getElementById('ni-about');

      home.classList.remove("active");
      contact.classList.remove("active");
      plan.classList.add("active");
      about.classList.remove("active");
    }
    render(){
        return (
            <div className="background">
        <div className="container-plans">
          <div className="panel pricing-table">
            <div className="pricing-plan">
              <img src="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png" alt="" className="pricing-img" />
              <h2 className="pricing-header">Mini</h2>
              <ul className="pricing-features">
                <li className="pricing-features-item">Monthly Once</li>
                <li className="pricing-features-item">2000₹ Max</li>
              </ul>
              <span className="pricing-price">Free</span>
              <a href="#/" className="pricing-button">Sign up</a>
            </div>
            <div className="pricing-plan">
              <img src="https://s28.postimg.cc/ju5bnc3x9/plane.png" alt="" className="pricing-img" />
              <h2 className="pricing-header">Elite</h2>
              <ul className="pricing-features">
                <li className="pricing-features-item">Monthly Twice</li>
                <li className="pricing-features-item">3000₹ Max</li>
              </ul>
              <span className="pricing-price">₹150</span>
              <a href="#/" className="pricing-button is-featured">Buy Now</a>
            </div>
            <div className="pricing-plan">
              <img src="https://s21.postimg.cc/tpm0cge4n/space-ship.png" alt="" className="pricing-img" />
              <h2 className="pricing-header">Grand</h2>
              <ul className="pricing-features">
                <li className="pricing-features-item">Weekly Once</li>
                <li className="pricing-features-item">4000₹ max</li>
              </ul>
              <span className="pricing-price">₹400</span>
              <a href="#/" className="pricing-button">Buy Now</a>
            </div>
          </div>
        </div>
      </div>
        );
    }
}
export default Plans;