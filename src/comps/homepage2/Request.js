import {Link} from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar'
const Request = ({title,user,desc,bonafide,additional,vote,amountAlready,amountRequired,amountTotal,date,reqId}) => {    
return(
    <div className="availed-element container">                            
        <div className="al-arrows">
            <i className="fa fa-arrow-circle-up" id="up1"  ></i>
            <span className="up-count" id="count1">{vote}</span>
            <i className="fa fa-arrow-circle-down" id="down1"></i>
        </div>
        <div className="al-vr-line"></div>
        <div className="al-right-info">
            <div className="al-title">
                <div className="title-links">
                    <span className="req-title">{ title }</span> 
                    <details>
                        <summary>Links Provided</summary>
                        <ul className="links-drop-down">
                            <li><span><a href={bonafide} >Bonafide</a></span></li>
                            <li><span><a href={additional}>Additional Details</a></span></li>
                        </ul>                                        
                    </details>
                </div>                
                <span className="requested-user">
                    @{user} on  {date.split("T")[0]}                    
                </span>
            </div>                                
            <div className="al-description">
                <p>
                   {desc}                                      
                </p>

                <div className="request-footer">
                    <div className="donation-bar">
                        <span className="donation-info">Fund Requested : {amountTotal}</span> 
                        <div><ProgressBar  variant="success"  now={(amountAlready/amountTotal)*100} label={`${amountAlready}₹`}/></div>
                    </div>
                    <div className="read-more">
                        <Link to={'/availed/all/'+reqId} >View Request </Link>                        
                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </div>
                </div>
                
                

            </div>
        </div>
    </div>
);
}

export default Request;