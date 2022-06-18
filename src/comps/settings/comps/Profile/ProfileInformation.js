import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {APIIP} from '../../config';
import { useState,useEffect } from 'react';
import Avatar from '@mui/material/Avatar';


export default function ProfileInformation() {
  
  const [userData,setUserData] = useState({});
  useEffect(() => {
    fetch(APIIP.ip+"/users/"+localStorage.getItem('userId')+"/profile?sessionKey="+localStorage.getItem('sessionKey'))
    .then( (response)=> response.json())
    .then( (response => { setUserData(response) } )
    )
    .catch( (error)=> { console.log(error); } )
  }, []);

  return (
    <Box sx={{  m:3 }}>
      <Card variant="outlined">
        <React.Fragment>
          {
            userData.fname!=null && userData.fname!=undefined && userData.fname!="" ?
          <CardContent>
              
              <Typography variant='h5'   color="text.secondary" gutterBottom>Personal Information</Typography>
              <div className="d-flex ">
                <img style={{borderRadius:"20px",width:"100px"}} src={userData.avatarUrl} className="img-fluid" alt="" />
              </div>
              <Typography variant="h5" component="div">{userData.fname + userData.lname}</Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">@{userData.username}</Typography>
              <Typography variant='h6' color="text.secondary" gutterBottom>Bio</Typography>
              
              <Typography variant="body2" gutterBottom>
                  I am a software engineer and a full-stack developer. I have a passion for building web applications and I love to learn new technologies. I am currently working as a software engineer at <a href="https://www.linkedin.com/company/microsoft/">Microsoft</a>.
              </Typography>

              <Typography variant='h6'  color="text.secondary" >Contact Information            </Typography>
              <Typography variant="body2" >{userData.email}</Typography>
              <Typography variant="body2" gutterBottom>{userData.phNumber}</Typography>        

          </CardContent>
          :
          'Loading'
          }



          <CardActions>
              <Button size="small">Edit</Button>
          </CardActions>      
        </React.Fragment>
      </Card>
    </Box>
  );
}
