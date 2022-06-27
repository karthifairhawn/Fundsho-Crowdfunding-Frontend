import Typography from '@mui/material/Typography';
import { Box, TextField,TextareaAutosize, Input } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



const PersonalInformation = ({alterValues}) => {

    function loginUser(e,key,value){
        e.preventDefault();  
        alterValues(key,value)  
    }


    return ( 
        <div className="d-flex justify-content-center ">
        <div className="card mt-2 col-xl-6 col-sm-12" style={{overflow: 'auto'}}>

            <form onSubmit={(e)=>{loginUser(e)}} className="card-body">
                <div className="d-flex">
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" onChange={(e) =>{ loginUser(e,"fname",e.target.value)}} className="form-control" id="firstName" placeholder="First Name" />                
                        </div>
                        <div style={{width: '30px',}} className="d-xs-none"></div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input onChange={(e) =>{ loginUser(e,"lname",e.target.value)}} type="text" className="form-control" id="lastName" placeholder="Last Name" />
                        </div>
                </div>

                <div className="d-lg-flex ">

                    <div className="d-flex flex-column">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email"  onChange={(e) =>{ loginUser(e,"personalEmail",e.target.value)}} className="form-control" id="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" className="form-control" onChange={(e) =>{ loginUser(e,"phoneNumber",e.target.value)}} id="phone" placeholder="Phone" />
                    </div>
                    </div>
                    <div style={{width: '30px',}} className="d-xs-none"></div>
                    <div className="form-group" >
                        <label htmlFor="address">Address</label>
                        <br/>
                        <textarea name="address" onChange={(e) =>{ loginUser(e,"address",e.target.value)}} id="address" rows="3" style={{width: '300px'}}></textarea>
                    </div>

                </div>
                
                <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <div></div>
                    <input type="radio" id="gender"/>Male                    
                    <span style={{marginRight:"10px"}}></span>
                    <input type="radio"  id="gender"/>Female
                </div>
                
                <div className="form-group mt-2">
                    <label htmlFor="city">City</label>
                    <input onChange={(e) =>{ loginUser(e,"city",e.target.value)}} type="text" className="form-control" id="city" placeholder="City" />
                </div>
                <div className="form-group">
                    <label htmlFor="state">State</label>
                    <input onChange={(e) =>{ loginUser(e,"stateRegion",e.target.value)}} type="text" className="form-control" id="state" placeholder="State" />
                </div>
                <div className="form-group">
                    <label htmlFor="zip">Postal Code</label>
                    <input onChange={(e) =>{ loginUser(e,"pinCode",e.target.value)}} type="text" className="form-control" id="Postal Code" placeholder="Zip" />
                </div>                
                <div className="form-group">
                    <label htmlFor="birthday">Date of Birth</label>
                    <input onChange={(e) =>{ loginUser(e,"dateOfBirth",e.target.value)}} type="date" className="form-control" id="dob" placeholder="Birthday" />
                </div>      

                <div className="form-group">
                    <div><label htmlFor="self-about">Self-About</label></div>
                    <textarea onChange={(e) =>{ loginUser(e,"background",e.target.value)}} name="self-about" id="self-about" rows="3" style={{width:"100%"}} ></textarea>        
                </div>

            </form>
        </div>
        </div>    
     );
}
 
export default PersonalInformation;