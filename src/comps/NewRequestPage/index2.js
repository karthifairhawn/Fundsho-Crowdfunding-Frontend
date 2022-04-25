import {useState} from 'react';
import Navbar from '../footer_header/navbar';
import {APIIP} from '../settings/config';


const NewRequestPage = () => {

    const [fname,setFname] = useState("");
    const [lname,setLname] = useState("");
    const [gender,setGender] = useState("");
    const [identity,setIdentity] = useState("123");
    const [fatherName,setFatherName] = useState("");
    const [fatherOccupation,setFatherOccupation] = useState("");
    const[annualSalary,setAnnualSalary] = useState(0);
    const [dob,setDob] = useState("");


    const [instName,setInstName] = useState("");
    const [studyProgram,setStudyProgram] = useState("");
    const [instPlace,setInstPlace] = useState("");
    const [cgpa,setCgpa] = useState("");

    const [phNumber,setPhNumber] = useState(0);
    const [address,setAddress] = useState("");
    const [city,setCity] = useState("");
    const [pincode,setPincode] = useState("");
    const [state,setState] = useState("");
    const [email,setEmail] = useState("");

    const [eventTitle,setEventTitle] = useState("");
    const [amountRequired,setAmountRequired] = useState(0);
    const [deadLine,setDeadLine] = useState("");
    const [eventDescription,setEventDescription] = useState("");
    const [bonafideUrl,setBonafideUrl] = useState("");
    const [additionalLink,setAdditionalLink] = useState("");
    
    const[identityFile,setIdentityFile] = useState(undefined);
    const[bonafideFile,setBonafideFile] = useState(undefined);


    async function sendNewRequest(file,func) {        
        const formData = new FormData();
        formData.append('file',file);
        
        
        
        fetch(APIIP.ip+'/savefile', {
            method: 'POST',
            body: formData
        })    
        .then(r => r.text())
        .then(data => {
            func(data);
        })  

        console.log(bonafideUrl);
    }

    function submitRequest(){
        let obj = {
            userId : localStorage.getItem("userId"),                   
            fname: fname,
            lname: lname,
            gender: gender,
            identityUrl: identity,
            fatherName: fatherName,
            fatherOccupation: fatherOccupation,
            annualSalary: annualSalary,
            dateOfBirth:dob,

            institutionName: instName,
            studyProgram: studyProgram,
            institutePlace: instPlace,
            CGPA:cgpa,

            phoneNumber:phNumber,
            address:address,
            city:city,
            pinCode:pincode,
            stateRegion:state,
            personalEmail:email,

            eventTitle:eventTitle,
            amountRequired:amountRequired,
            deadLine: deadLine,
            eventDescription: eventDescription,
            bonafideUrl:bonafideUrl,
            additionalLinks: additionalLink

        }
        
        fetch(APIIP.ip+'/usersrequests', {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .catch(err => console.log(err));    

        console.log(obj);
    }


    return ( 
        <>
        <Navbar />
        {/* <h1>{console.log(identity)}</h1> */}
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
                        <input type="text" required value={fname} onChange={(e) => {setFname(e.target.value)}} placeholder="Enter First Name"/>
                    </div>
                    <div className="nrp-form-element">
                        <label>Last Name</label>
                        <input type="text" required value={lname} onChange={(e) => {setLname(e.target.value)}} placeholder="Enter Last Name"/>
                    </div>
                </div>         
                <div className="nrp-form-sub-group-row">
                    <div className="nrp-form-element">
                        <label>Gender</label>
                        <select value={gender} required onChange={(e) => {setGender(e.target.value)}}>
                            <option value="actual value 1">Male</option>
                            <option value="actual value 2">Female</option>
                            <option value="actual value 3">Others</option>
                        </select>
                    </div>
                    <div className="nrp-form-element">
                        <label>Uplaod Identity </label>
                        <div>
                            <input type="file" required accept='.pdf'    
                            // value={identityFile}
                            onChange={(e) => setIdentityFile(e.target.files[0])}
                            className="no-border" placeholder="Enter Last Name"/>
                            <i className="fa fa-cloud-upload" onClick={()=>{ sendNewRequest(identityFile,setIdentity)}} aria-hidden="true"></i>
                        </div>                            
                    </div>
                </div> 
                <div className="nrp-form-sub-group-row">
                    <div className="nrp-form-element">
                        <label>Father Name</label>
                        <input value={fatherName} required onChange={(e) => {setFatherName(e.target.value)}} type="text" placeholder="Enter Father Name"/>
                    </div>
                    <div className="nrp-form-element">
                        <label>Father Occupation</label>
                        <input value={fatherOccupation} required  onChange={(e) => {setFatherOccupation(e.target.value)}} type="text" placeholder="Enter Father Occupation"/>
                    </div>
                </div>   

                <div className="nrp-form-sub-group-row">
                    <div className="nrp-form-element">
                        <label>Household Annual Salary</label>
                        <input  value={annualSalary} required onChange={(e) => {setAnnualSalary(e.target.value)}} type="number" placeholder="Enter Father Name"/>
                    </div>
                    <div className="nrp-form-element">
                        <label>D.O.B</label>
                        <input  value={dob} required onChange={(e) => {setDob(e.target.value)}} type="date" placeholder="Enter Father Occupation"/>
                    </div>
                </div> 

                {/* ------------------------ */}

                <br />

                <h6>Educational Information</h6> 
                <div className="nrp-form-sub-group-row">
                    <div className="nrp-form-element">
                        <label>Institute Name</label>
                        <input  required value={instName} onChange={(e) => {setInstName(e.target.value)}} type="text" placeholder="Enter Institute Name"/>
                    </div>
                    <div className="nrp-form-element">
                        <label>Study Program (Diploma/B.E/Arts)</label>
                        <input  required value={studyProgram} onChange={(e) => {setStudyProgram(e.target.value)}} type="text" placeholder="Enter your Stucy Program"/>
                    </div>
                </div>  

                <div className="nrp-form-sub-group-row">
                    <div className="nrp-form-element">
                        <label>Institute Place</label>
                        <input  required value={instPlace} onChange={(e) => {setInstPlace(e.target.value)}}type="text" placeholder="Enter Institute Place"/>
                    </div>
                    <div className="nrp-form-element">
                        <label>CGPA / Percentage</label>
                        <input  required value={cgpa} onChange={(e) => {setCgpa(e.target.value)}} type="number" placeholder="Enter your Stucy Program"/>
                    </div>
                </div>  


                <br />
                <h6>Contact Information</h6> 
                <div className="nrp-form-sub-group-row">
                    <div className="nrp-form-element">
                        <label>Phone Number</label>
                        <input required value={phNumber} onChange={(e) => {setPhNumber(e.target.value)}} type="text" placeholder="Enter Ph Number"/>
                    </div>
                    <div className="nrp-form-element">
                        <label>Address</label>
                        <input required value={address} onChange={(e) => {setAddress(e.target.value)}} type="text" placeholder="Enter Address"/>
                    </div>
                </div>  
                <div className="nrp-form-sub-group-row">
                    <div className="nrp-form-element">
                        <label>City</label>
                        <input value={city} onChange={(e) => {setCity(e.target.value)}} type="text" placeholder="Enter your city"/>
                    </div>
                    <div className="nrp-form-element">
                        <label>Pincode</label>
                        <input required value={pincode} onChange={(e) => {setPincode(e.target.value)}} type="text" placeholder="Enter Areacode/Pincode"/>
                    </div>
                </div>  
                <div className="nrp-form-sub-group-row">
                    <div className="nrp-form-element">
                        <label>State</label>
                        <select required value={state} onChange={(e) => {setState(e.target.value)}}  name="state" id="state" >
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
                        <input required value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="Enter Personal Email"/>
                    </div>
                </div>  

                
                <br />


                {/* ---------------- */}
                
                <h6>Event Information</h6>     
                <div className="nrp-form-sub-group-row">
                    <div className="nrp-form-element">
                        <label>Title</label>
                        <input required value={eventTitle} onChange={(e) => {setEventTitle(e.target.value)}} type="text" placeholder="Enter Event Title" className="nrp-nighty-width"/>
                    </div>
                </div>

                <div className="nrp-form-sub-group-row">
                    <div className="nrp-form-element">
                        <label>Amount Required</label>
                        <input required value={amountRequired} onChange={(e) => {setAmountRequired(e.target.value); console.log(amountRequired)}} type="number" placeholder="Enter Amount ₹ Required"/>
                    </div>
                    <div className="nrp-form-element">
                        <label>Deadline</label>
                        <input required value={deadLine} onChange={(e) => {setDeadLine(e.target.value)}} type="date" placeholder="Enter Last Name"/>
                    </div>
                </div>

                <div className="nrp-form-sub-group-row">
                    <div className="nrp-form-element">
                        <label>Event Description:</label>
                        <textarea required value={eventDescription} onChange={(e) => {setEventDescription(e.target.value)}} placeholder="Tell about the event and your efforts in brief..." id="" cols="30" rows="10"></textarea>
                    </div>
                </div>

                <div className="nrp-form-sub-group-row">
                    <div className="nrp-form-element">
                        <label>Bonafide PDF</label>
                        <div>
                            <input required type="file" className="no-border"                     
                            onChange={(e) => setBonafideFile(e.target.files[0])}
                            placeholder="Enter Last Name"/>
                            <i className="fa fa-cloud-upload" 
                            onClick={()=>{ sendNewRequest(bonafideFile,setBonafideUrl )} }
                            aria-hidden="true"></i>
                        </div>   
                    </div>
                    <div className="nrp-form-element">
                        <label>Additional Link</label>
                        <input required value={additionalLink} onChange={(e) => {setAdditionalLink(e.target.value)}} type="text" placeholder="If any additional data"/>
                    </div>
                </div>     
                <br />
                                          
                <button onClick={(e)=>{submitRequest();e.preventDefault();}}>Submit for Review</button>
            </form>
            
            <br />
            <br />
        </div>        
        </>
     );
}
 
export default NewRequestPage;