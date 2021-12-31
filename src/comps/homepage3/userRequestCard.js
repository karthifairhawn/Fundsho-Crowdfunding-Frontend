import { ProgressBar } from "react-bootstrap";
const RequestCard = () => {
    return ( 
        <div className="home-card">
            <div className="home-card-body">
                <span className="tag tag-teal">Udemy</span>
                <h4>
                    Why is the Tesla Cybertruck designed the way it
                    is?
                </h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestias placeat qui ipsum necessitatibus sit cumque ipsa! Vero reprehenderit inventore hic modi recusandae labore rem ad harum, nemo dolorem esse?
                </p>
                <div className="user">
                    <img src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo" alt="user" />
                    <div className="user-info">
                        <h6>Sigma Mordez</h6>                    
                    </div>
                </div>

                <br />

                <div className="donation-info">
                    <div className="raise-donation"><b className="donated-amount">₹ 4,70,09,036</b> raised</div>
                    <ProgressBar className="donation-progress-bar" now={60} />
                </div>
                

                <div className="card-footer">
                    <span><i className="fa fa-calendar-plus-o" aria-hidden="true"></i> &nbsp; 20 Days left</span>
                    <span>18&nbsp;Donations</span>
                </div>
            </div>
        </div>
     );
}
 
export default RequestCard;