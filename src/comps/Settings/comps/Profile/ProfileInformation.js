import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {APIIP} from '../../config';
import { useState,useEffect } from 'react';
import WalletModel from '../Admin/Users/WalletModel';
import TransactionsModel from '../Admin/Users/TransactionsModel';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



toast.configure();
const notify = (msg,Type) => {
  toast(msg,{
      type: Type,
      theme: ''
  })
}



export default function ProfileInformation({userId}) {
  
  const [userData,setUserData] = useState({});  


  useEffect(() => {        
    var ipTofetch="";
    if(userId===undefined) {      
      ipTofetch= APIIP.ip+"/users/"+localStorage.getItem('userId')+"/profile?sessionKey="+localStorage.getItem('sessionKey');
    }else{
      ipTofetch=APIIP.ip+"/admin/users/"+userId+"?sessionKey="+localStorage.getItem('sessionKey');
    }

    fetch(ipTofetch)
    .then( (response)=> response.json())
    .then( (response => { setUserData(response) } )
    )
    .catch( (error)=> { console.log(error); } )
  }, [userId]);

  // Balance Fetch
  const [transaction,setTransaction] = useState({});
  const [balance,setBalance] = useState(0);

  useEffect(() => {        
      var url = APIIP.ip+"/admin/users/"+userId+"/wallet?sessionKey="+localStorage.getItem("sessionKey");
      // console.log(url);
      if(userId!==undefined){
      fetch(url)
      .then((response)=> response.json())
      .then((response => {            
          setTransaction(response.transaction);            
          setBalance(response.balance);                                        
      }));
    }
  },[userId])

  function blockToggle(toggleValue){
    var url = APIIP.ip+"/admin/users/"+userId+"/status?blockStatus="+toggleValue+"&sessionKey="+localStorage.getItem("sessionKey");
    console.log(url);
    fetch(url,{
      method: "PUT"      
    }).then((response)=> {
      if(response.status === 200) {        
        document.elementFromPoint(1, 1).click();
        notify("User status updated successfully.","success");
      }
    }
    )

  }

  return (
    <Box sx={{  m:3 }}>
      <Card variant="outlined">
        <React.Fragment>
          {
            userData.fname!==null && userData.fname!==undefined && userData.fname!=="" ?
          <CardContent>
              
              <Typography variant='h5'   color="text.secondary" gutterBottom>Personal Information</Typography>
              <div className="d-flex ">
                <img style={{borderRadius:"20px",width:"100px"}} src={userData.avatarUrl} className="img-fluid" alt="" />
              </div>
              <Typography variant="h5" component="div">{userData.fname + userData.lname}</Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">@{userData.username}</Typography>
              <Typography variant='h6' color="text.secondary" gutterBottom>Bio</Typography>
              
              <Typography variant="body2" gutterBottom>
                  {userData.bio}
              </Typography>

              <Typography variant='h6'  color="text.secondary" >Contact Information            </Typography>
              <Typography variant="body2" >{userData.email}</Typography>
              <Typography variant="body2" gutterBottom>{userData.phNumber}</Typography>        

          </CardContent>
          :
          'Loading'
          }


          {
            userId===undefined ?
            <CardActions>
              <Button size="small">Edit</Button>
            </CardActions>  
            :
            <>
            <CardActions>
              <Button size="small">Fundraises</Button>
              <WalletModel balance={balance}/>
              <TransactionsModel transaction={transaction} />          
            </CardActions>
            <CardActions>
              {
                userData.blocked===0 &&
                <Button style={{color:'red'}} onClick={() => blockToggle(1)} type="button" >Block user</Button>  
              }
              {
                userData.blocked===1 &&
                <Button style={{color:'orange'}} onClick={() => blockToggle(0)}>Unblock user</Button>
              }

            </CardActions>            
            </>

          }
          


        </React.Fragment>
      </Card>
    </Box>
  );
}
