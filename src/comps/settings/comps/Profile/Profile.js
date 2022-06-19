import Grid from '@mui/material/Grid';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import DonationInfo from "./DonationInfo";
import ProfileInformation from "./ProfileInformation";
import ProfileLevel from "./ProfileLevel";
import Stats from "./Stats";

toast.configure();
const Profile = () => {

    const notify = (msg,Type) => { toast(msg,{ type: Type, theme: 'dark' }) }   

    
    return ( 
        <>
            {/* <SpinLoader/>           */}
            {/* <div className="d-lg-flex"> */}
            <Grid container spacing={1}>
                <Grid item xl={5}>
                    <ProfileInformation/>
                </Grid>
                <Grid item xl={7} md={12} xs={12} >        
                    <div className="d-lg-flex">
                        <DonationInfo/>
                        <ProfileLevel/>
                    </div>
                    <Stats/>                                                             
                </Grid>
                
            </Grid>
                
            {/* </div> */}
            
            </>        
     );
}
 
export default Profile;

