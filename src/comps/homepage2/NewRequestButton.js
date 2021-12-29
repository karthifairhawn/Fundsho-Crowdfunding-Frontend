import React from 'react';
import Modal from 'react-modal';
import {Link} from 'react-router-dom';
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

const NewRequestButton = () => {

    function updateRequest() {

      let obj = {
        userId: localStorage.getItem("userId"),
        title:title,
        requestInfo:info,
        deadline:deadline,
        totalAmount:amount,
        bonafideUrl:bonafide,
        additionalUrl:additional
      }

      fetch(APIIP.ip+'/requests', {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {"Content-type": "application/json; charset=UTF-8"}
        })
    }


    const [title,setTitle] = useState("");
    const [info,setInfo] = useState("");
    const [deadline,setDeadline] = useState("");
    const [bonafide,setBonafide] = useState("");
    const [additional,setAdditional] = useState("");
    const [amount,setAmount] = useState("");

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {  setIsOpen(true);  }
  
    function afterOpenModal() { subtitle.style.color = 'yellowgreen'; }
  
    function closeModal() { setIsOpen(false); }
  
    return (
      <div>
        {/* <button onClick={openModal}>Add New Request</button> */}
        <button><Link to="/newrequest">Add New Request</Link></button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <div className="request-from-header">
              <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Enter Request Details</h2><button onClick={closeModal}>close</button>  
          </div>

          
          <form className="new-request-form">
            <input type="text" placeholder="Enter Request title" value={title} onChange={ (e) => (setTitle(e.target.value))}/>
            <textarea cols="30" rows="10" placeholder="Tell about the request in brief..." value={info} onChange={ (e) => (setInfo(e.target.value))}></textarea>
            <input type="text" placeholder="Bonafide URL" value={bonafide} onChange={ (e) => (setBonafide(e.target.value))}/>
            <input type="text" placeholder="Additional URL" value={additional} onChange={ (e) => (setAdditional(e.target.value))}/>

            <label className="white">Deadline for donation</label>
            <input type="date" value={deadline} onChange={ (e) => (setDeadline(e.target.value))}/>

            <input type="text" value={amount} onChange={ (e) => (setAmount(e.target.value))} placeholder="Total amount required"/>          

            <button onClick={ (e) =>{
              e.preventDefault();
              updateRequest();
            }}>Submit for review</button>            
            
          </form>
                  
        </Modal>
      </div>
    );
  }
 
export default NewRequestButton;