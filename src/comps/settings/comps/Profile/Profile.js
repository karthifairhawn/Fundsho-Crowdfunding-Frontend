import { useState,useEffect } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SpinLoader from "../../../homepage3/SpinLoader";
import {APIIP} from '../../config';
import DonationInfo from "./DonationInfo";
import ProfileInformation from "./ProfileInformation";
import ProfileLevel from "./ProfileLevel";
import Grid from '@mui/material/Grid';

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
                <Grid item xl={4} sm={12} xs={12}>
                    <DonationInfo/>
                </Grid>
                <Grid item xl={3} sm={12} xs={12}>
                    <ProfileLevel/>
                </Grid>
                <Grid item xxl={4}>
                    <DonationInfo/>                    
                </Grid>
            </Grid>
                
            {/* </div> */}
            
            </>        
     );
}
 
export default Profile;

