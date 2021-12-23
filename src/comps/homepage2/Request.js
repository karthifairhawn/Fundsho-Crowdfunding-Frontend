
const Request = ({title,user,desc,bonafide,additional,vote}) => {
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
                <span className="req-title">{ title }</span> 
                <span className="requested-user">
                    @{user}
                </span>
            </div>                                
            <div className="al-description">
                <p>
                   {desc}                                      
                </p>

                <div className="request-footer">
                    <div className="requests-links">
                        <span>Bonafide : <a href={bonafide} >Get Bonafide</a></span>
                        <span>Additional Details : <a href={additional}>Get Additional Details</a></span>
                    </div>
                    <div className="read-more">Read More</div>
                </div>
                
            </div>
        </div>
    </div>
);
}

export default Request;