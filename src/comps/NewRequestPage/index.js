import Navbar from '../footer_header/navbar';
const NewRequestPage = () => {
    return ( 
        <>
        <Navbar />
        <div className="NewRequestPage">            
            <div className="nrp-header">
                <h6 className="nrp-header-title">You can request for you and also for your friends with you account</h6>
                <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dicta quidem, nisi voluptatibus fugiat totam. Velit</h6>
            </div>

            <form className="nrp-form">

                <h6>Personal Information</h6>     
                <div className="nrp-form-sub-group-row">
                    <div className="nrp-form-element">
                        <label>First Name</label>
                        <input type="text" placeholder="Enter First Name"/>
                    </div>
                    <div className="nrp-form-element">
                        <label>Last Name</label>
                        <input type="text" placeholder="Enter Last Name"/>
                    </div>
                </div>         
                <div className="nrp-form-sub-group-row">
                    <div className="nrp-form-element">
                        <label>Gender</label>
                        <select>
                            <option value="actual value 1">Male</option>
                            <option value="actual value 2">Female</option>
                            <option value="actual value 3">Others</option>
                        </select>
                    </div>
                    <div className="nrp-form-element">
                        <label>Uplaod Identity </label>
                        <input type="file" className="no-border" placeholder="Enter Last Name"/>
                    </div>
                </div> 
                <div className="nrp-form-sub-group-row">
                    <div className="nrp-form-element">
                        <label>Father Name</label>
                        <input type="text" placeholder="Enter Father Name"/>
                    </div>
                    <div className="nrp-form-element">
                        <label>Father Occupation</label>
                        <input type="text" placeholder="Enter Father Occupation"/>
                    </div>
                </div>   

                <div className="nrp-form-sub-group-row">
                    <div className="nrp-form-element">
                        <label>Household Annual Salary</label>
                        <input type="number" placeholder="Enter Father Name"/>
                    </div>
                    <div className="nrp-form-element">
                        <label>D.O.B</label>
                        <input type="date" placeholder="Enter Father Occupation"/>
                    </div>
                </div> 

                {/* ------------------------ */}

                <br />

                <h6>Educational Information</h6> 
                <div className="nrp-form-sub-group-row">
                    <div className="nrp-form-element">
                        <label>Institute Name</label>
                        <input type="text" placeholder="Enter Institute Name"/>
                    </div>
                    <div className="nrp-form-element">
                        <label>Study Program (Diploma/B.E/Arts)</label>
                        <input type="text" placeholder="Enter your Stucy Program"/>
                    </div>
                </div>  

                <div className="nrp-form-sub-group-row">
                    <div className="nrp-form-element">
                        <label>Institute Place</label>
                        <input type="text" placeholder="Enter Institute Place"/>
                    </div>
                    <div className="nrp-form-element">
                        <label>CGPA / Percentage</label>
                        <input type="number" placeholder="Enter your Stucy Program"/>
                    </div>
                </div>  


                <br />
                <h6>Contact Information</h6> 
                <div className="nrp-form-sub-group-row">
                    <div className="nrp-form-element">
                        <label>Phone Number</label>
                        <input type="text" placeholder="Enter Ph Number"/>
                    </div>
                    <div className="nrp-form-element">
                        <label>Address</label>
                        <input type="text" placeholder="Enter Address"/>
                    </div>
                </div>  
                <div className="nrp-form-sub-group-row">
                    <div className="nrp-form-element">
                        <label>City</label>
                        <input type="text" placeholder="Enter your city"/>
                    </div>
                    <div className="nrp-form-element">
                        <label>Pincode</label>
                        <input type="text" placeholder="Enter Areacode/Pincode"/>
                    </div>
                </div>  
                <div className="nrp-form-sub-group-row">
                    <div className="nrp-form-element">
                        <label>State</label>
                        <select name="state" id="state" >
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                            <option value="Daman and Diu">Daman and Diu</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Lakshadweep">Lakshadweep</option>
                            <option value="Puducherry">Puducherry</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="West Bengal">West Bengal</option>
                        </select>
                    </div>
                    <div className="nrp-form-element">
                        <label>Personal Email</label>
                        <input type="email" placeholder="Enter Personal Email"/>
                    </div>
                </div>  

                
                <br />


                {/* ---------------- */}
                
                <h6>Event Information</h6>     
                <div className="nrp-form-sub-group-row">
                    <div className="nrp-form-element">
                        <label>Title</label>
                        <input type="text" placeholder="Enter Event Title" className="nrp-nighty-width"/>
                    </div>
                </div>

                <div className="nrp-form-sub-group-row">
                    <div className="nrp-form-element">
                        <label>Amount Required</label>
                        <input type="number" placeholder="Enter Amount ₹ Required"/>
                    </div>
                    <div className="nrp-form-element">
                        <label>Deadline</label>
                        <input type="date" placeholder="Enter Last Name"/>
                    </div>
                </div>

                <div className="nrp-form-sub-group-row">
                    <div className="nrp-form-element">
                        <label>Event Description:</label>
                        <textarea placeholder="Tell about the event and your efforts in brief..." id="" cols="30" rows="10"></textarea>
                    </div>
                </div>

                <div className="nrp-form-sub-group-row">
                    <div className="nrp-form-element">
                        <label>Bonafide PDF</label>
                        <input type="file" placeholder="Enter your city"/>
                    </div>
                    <div className="nrp-form-element">
                        <label>Additional Link</label>
                        <input type="text" placeholder="If any additional data"/>
                    </div>
                </div>                                   
            </form>
            <br />
            <button>Submit for Review</button>
            <br />
        </div>        
        </>
     );
}
 
export default NewRequestPage;