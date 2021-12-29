import React from 'react';
import Modal from 'react-modal';
import { useState } from 'react';
import {APIIP} from '../settings/config';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#252525'
  },  
  
};

const DonateModel = ({amountRequiredProp,reqId,reRenderFunction}) => {

    

    var amountRequired = amountRequiredProp;
    const [userBalance,setUserBalance] = useState(localStorage.getItem('balance'));
    const [donation,setDonation] = useState(0);

    function makeDonation() {
      let obj = {
        donationAmount: donation,
        requestId: reqId,
        sessionId:localStorage.getItem("sessionkey")      
      }
    
      fetch(APIIP.ip+'/donate', {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then((response) => {return response.json()})
      .then((response) => {
          setUserBalance(response.balance)
          localStorage.setItem('balance',userBalance);
      });
      closeModal();
    }

    
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {  setIsOpen(true);  }
  
    function afterOpenModal() { }
  
    function closeModal() { setIsOpen(false); }

  
    return (
      <div>
        <button onClick={openModal}>Donate Now</button>
        <Modal
          ariaHideApp={false}
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
         
         <form className="white donate-container">
            <h6>Your Wallet Balance : {userBalance}</h6>
            <h6>Required Amount : {amountRequired}</h6>
            <input type="range" min="1" max={Math.min(userBalance,amountRequired)} onChange={(e)=>{setDonation(e.target.value); }}/>
            <h6>{"  "+donation+"RS"}</h6>
            <button className="black-btn" onClick={ (e) =>{ e.preventDefault(); makeDonation(); reRenderFunction(); }}>Donate</button>
         </form>
                  
        </Modal>
      </div>
    );
  }
 
export default DonateModel;