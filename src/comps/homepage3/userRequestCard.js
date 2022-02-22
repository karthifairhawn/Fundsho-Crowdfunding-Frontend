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
        <img className="card-image" src={data.imageUrl} alt="" />
            <div className="home-card-body">
                {/* <h1>{console.log(data)}</h1> */}
                
                {/* <span className="tag tag-teal">{data.votes+" "}Votes</span> */}
                <h4>
                    {data.eventTitle.substring(0,60)}
                    {data.eventTitle.length >=60 ? "..." : ""}
                </h4>
                <p>
                    {data.eventDescription.substring(0, 240)} 
                    {data.eventDescription.length >240 ? "..." : ""}
                </p>
                {/* <div className="user">
                    <img src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo" alt="user" />
                    <div className="user-info">
                        <h6>{data.fname+" "+data.lname+" "}</h6>                    
                        <h6>By {data.userId===parseInt(localStorage.getItem('userId')) ? 'You' : 'ID-'+data.userId}</h6>
                        
                    </div>
                </div> */}
                

                <div className="donation-info">
                    <div className="raise-donation"><b className="donated-amount">₹ {data.amountRecieved}</b> raised</div>                    
                    <ProgressBar className="donation-progress-bar" now={ (data.amountRecieved/data.amountRequired)*100 } />

                    <div className="total-donate">
                        <div className="raise-donation">of {data.amountRequired}</div>
                        <Link to={`/fundraiser/${data.requestId}`}>                            
                            <button className="card-donate-btn center">Donate</button>
                        </Link>
                    </div>                    
                </div>
                

                <div className="card-footer">
                    <span><i className="fa fa-calendar-plus-o" aria-hidden="true"></i> &nbsp; {calculateDaysBetweenDates(data.deadLine)} Days left</span>
                    <span>18&nbsp;Donations</span>
                </div>
            </div>
        </div>
        </Link>

     );
}
 
export default RequestCard;
