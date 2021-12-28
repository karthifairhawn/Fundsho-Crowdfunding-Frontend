import ProgressBar from 'react-bootstrap/ProgressBar'

const SinglePageRequest = () => {
    return ( 
        <div className="spr-container">
            <div className="singlerequest-page">

                <div className="srp-header">
                    <i className="fa fa-arrow-left" aria-hidden="true"></i>
                    <div className="srp-title">This is title</div>
                    <div className="srp-donate-now-btn">
                        <button>Donate Now</button>
                    </div>                    
                </div>          

                <div className="srp-sub-header">
                    @karthifairhawn on 12/02/2021
                </div>      

                <div className="srp-content">
                    <div className="al-arrows">
                        <i className="fa fa-arrow-circle-up" id="up1"  ></i>
                        <span className="up-count" id="count1">12</span>
                        <i className="fa fa-arrow-circle-down" id="down1"></i>
                    </div>
                    <div>
                    <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus nisi qui blanditiis vero perferendis ipsam. Facere, voluptatem in eius aliquid inventore consectetur, nisi nesciunt similique dolorem doloremque corporis saepe ex.
                        Ipsum nam blanditiis odio asperiores corporis praesentium quia maiores beatae, neque cupiditate. Perspiciatis debitis aperiam sequi dolorum, assumenda voluptates nesciunt hic ratione animi. Aperiam delectus officiis suscipit alias nisi sit?
                        Perspiciatis doloremque, ducimus sint fuga, architecto iure qui ea animi ipsum facilis aliquid suscipit, ratione deleniti molestiae iste voluptatibus! Sapiente dicta deleniti placeat natus fugit quam necessitatibus labore quasi veniam.
                        Dolor harum eos odio quas, nisi reprehenderit perferendis nihil obcaecati unde provident enim, at quae molestiae vitae excepturi minus illo. Temporibus soluta repellat esse porro earum quam doloribus ullam nesciunt.
                        Exercitationem, rem! Qui perferendis, voluptatibus atque accusantium numquam, magni omnis dolorum repellat veniam, reiciendis earum autem sunt. Impedit nemo culpa tenetur aliquid voluptate molestiae, eaque illo unde beatae et omnis?
                        Dicta earum illum facilis quos. Provident, vel. Eius tenetur reiciendis, nisi nam veritatis obcaecati dolorum? Delectus provident eius ipsa, animi, aperiam minima dicta voluptates excepturi fuga impedit dolore explicabo totam.
                        Atque distinctio voluptate ut quasi quia. Dolorum id cumque nam dolor tenetur, dicta et nobis magnam numquam tempore qui odit ipsam, ab ullam obcaecati ipsa corporis sed nihil perferendis eius.
                        Pariatur similique provident, voluptas nesciunt inventore corporis sed eveniet velit accusamus omnis explicabo blanditiis consequuntur nobis. Asperiores nihil dicta cupiditate quia perferendis, incidunt alias! Quidem reprehenderit neque itaque suscipit commodi.
                        Aut, hic modi minima maiores a harum qui! Quisquam facilis, vero ratione ut quibusdam recusandae exercitationem tempora? Necessitatibus, eius voluptatem, quia expedita minus, aliquid fuga doloribus labore adipisci praesentium cum!
                    </p>
                    <div className="shared-edit">
                        <span>Share</span>
                        <span>Edit</span>
                        <span>Report</span>
                    </div>                    

                    </div>
                    
                </div>

                <div className="donation-progress">
                    <span>Recieved&nbsp;<i className="fa fa-inr" aria-hidden="true"></i></span>
                    <ProgressBar animated striped variant="success"  now='34' label="123₹ / 500₹"/>
                </div>

                <div className="srp-information">
                    <span>
                        <i className="fa fa-link" aria-hidden="true">&nbsp;</i><a href="" target="_blank">Bonafide Informations</a>
                    </span>                        
                    <span>
                        <i className="fa fa-link" aria-hidden="true">&nbsp;</i><a href="" target="_blank">Additional Informations</a>                    
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