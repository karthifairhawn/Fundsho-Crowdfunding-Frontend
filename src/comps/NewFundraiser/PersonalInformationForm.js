import Typography from '@mui/material/Typography';
import { Box, TextField,TextareaAutosize, Input } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function loginUser(e){
    e.preventDefault();
}

const PersonalInformation = () => {
    return ( 
        <div className="d-flex justify-content-center ">
        <div className="card mt-2 col-xl-6 col-sm-12" style={{overflow: 'auto'}}>

            <form onSubmit={(e)=>{loginUser(e)}} className="card-body">
                <div className="d-flex">
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" className="form-control" id="firstName" placeholder="First Name" />                
                        </div>
                        <div style={{width: '30px',}} className="d-xs-none"></div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" className="form-control" id="lastName" placeholder="Last Name" />
                        </div>
                </div>

                <div className="d-lg-flex ">

                    <div className="d-flex flex-column">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email"  className="form-control" id="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" className="form-control" id="phone" placeholder="Phone" />
                    </div>
                    </div>
                    <div style={{width: '30px',}} className="d-xs-none"></div>
                    <div className="form-group" >
                        <label htmlFor="address">Address</label>
                        <br/>
                        <textarea name="address" id="address" rows="3" style={{width: '300px'}}></textarea>
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
                    <input type="text" className="form-control" id="city" placeholder="City" />
                </div>
                <div className="form-group">
                    <label htmlFor="state">State</label>
                    <input type="text" className="form-control" id="state" placeholder="State" />
                </div>
                <div className="form-group">
                    <label htmlFor="zip">Postal Code</label>
                    <input type="text" className="form-control" id="Postal Code" placeholder="Zip" />
                </div>                
                <div className="form-group">
                    <label htmlFor="birthday">Date of Birth</label>
                    <input type="date" className="form-control" id="dob" placeholder="Birthday" />
                </div>      

                <div className="form-group">
                    <div><label htmlFor="self-about">Self-About</label></div>
                    <textarea name="self-about" id="self-about" rows="3" style={{width:"100%"}} ></textarea>        
                </div>

            </form>
        </div>
        </div>    
     );
}
 
export default PersonalInformation;