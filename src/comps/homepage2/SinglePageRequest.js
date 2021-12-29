import ProgressBar from 'react-bootstrap/ProgressBar'
// import {useState} from 'react';
// import {APIIP} from '../settings/config';
import {useHistory} from 'react-router-dom';
import DonateModel from './DonateModel';

const SinglePageRequest = ({title,user,desc,bonafide,additional,vote,amountAlready,amountTotal,date,reqId,reRenderFunction}) => {

    // const [data,setData] = useState({});
    const history = useHistory();

    const goBack = ()=>{
        history.push('/availed/all');           
    };


    return ( 
        <div className="spr-container">
            <div className="singlerequest-page">

                <div className="srp-header">
                    <i onClick={ () =>{goBack();}} className="fa fa-arrow-left" aria-hidden="true"></i>
                    <div className="srp-title">{title}</div>
                    <div className="srp-donate-now-btn">

                        {
                            user!==localStorage.getItem('username')
                            &&
                            <DonateModel amountRequiredProp={amountTotal-amountAlready} reqId={reqId} reRenderFunction={reRenderFunction}/>
                        }

                    </div>                    
                </div>          

                <div className="srp-sub-header">
                    @{user} on {date}
                </div>      

                <div className="srp-content">
                    <div className="al-arrows">
                        <i className="fa fa-arrow-circle-up" id="up1"  ></i>
                        <span className="up-count" id="count1">{vote}</span>
                        <i className="fa fa-arrow-circle-down" id="down1"></i>
                    </div>
                    <div>
                    <p>
                            {desc}
                    </p>
                    <div className="shared-edit">
                        <span>Share</span>
                        <span>Edit</span>
                        <span>Report</span>
                    </div>                    

                    </div>
                    
                </div>

                <div className="donation-progress">
                    <span>Recieved&nbsp;</span>
                    <ProgressBar animated striped variant="success"  now={(amountAlready/amountTotal) *100} ></ProgressBar> <span> &nbsp;{amountAlready+ "₹ / "+amountTotal+"₹"}</span>
                </div>

                <div className="srp-information">
                    <span>
                        <i className="fa fa-link" aria-hidden="true">&nbsp;</i><a rel="noopener noreferrer" href={bonafide} target="_blank">Bonafide Information</a>
                    </span>                        
                    <span>
                        <i className="fa fa-link" aria-hidden="true">&nbsp;</i><a rel="noopener noreferrer" href={additional} target="_blank">Additional Informations</a>                    
                    </span>
                </div>

                <hr />

                <div className="srp-comment-section">
                    <span>0 Comments</span>
                    <br />
                    <br />
                    <div className="add-comment">
                        <div className="add-comment-img"> <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="profile-img" /> </div>
                        <input type="text" placeholder="Add your comment"/>
                        <button>Submit</button>
                    </div>
                    <br />
                </div>

            </div>
        </div>
     );
}
 
export default SinglePageRequest;