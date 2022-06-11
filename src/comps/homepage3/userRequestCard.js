import { ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
const RequestCard = ({data}) => {

    function calculateDaysBetweenDates(date2) {
        let date1 = new Date().getTime();

        date2 = date2.split("T")[0].split("-").reverse();    
        [date2[0],date2[1]] = [date2[1],date2[0]]
        date2 = new Date(date2.join("-"));
        date2 = date2.getTime();

        var oneDay = 24 * 60 * 60 * 1000;        
        var days = Math.round(Math.abs(date1 - date2) / oneDay);
        return days;
      }


    return ( 
        <Link className="card-main-link" to={`/fundraiser/${data.requestId}`}>
            
            <div className="home-card">
            <img className="card-image" src={data.eventImageUrl} alt="" />
                <div className="home-card-body pb-1 pt-1">                    
                    <h4>
                        {data.eventTitle.substring(0,60)}
                        {data.eventTitle.length >=60 ? "..." : ""}
                    </h4>
                    <p>
                        {data.eventDescription.substring(0, 210)} 
                        {data.eventDescription.length >210 ? "..." : ""}
                    </p>                    
                    

                    <div className="donation-info">
                        <div className="raise-donation"><b className="donated-amount">₹ {data.amountRecieved}</b> raised</div>                    
                        <ProgressBar className="donation-progress-bar" now={ (data.amountRecieved/data.amountRequired)*100 } />

                        <div className="total-donate">
                            <div className="raise-donation">of {data.amountRequired}</div>
                            
                                <button className="card-donate-btn center">Donate</button>
                            
                        </div>                    
                    </div>
                    

                </div>
                
                <div className="card-footer">
                        <span><i className="fa fa-calendar-plus-o" aria-hidden="true"></i> &nbsp; {calculateDaysBetweenDates(data.deadLine)} Days left</span>                        

                        <div>
                            <i className="fa-solid fa-heart" style={{color: '#015c7d'}}></i>
                            &nbsp;
                            <span>{data.votes}&nbsp;</span>
                        </div>

                </div>
            </div>
        </Link>

     );
}
 
export default RequestCard;
