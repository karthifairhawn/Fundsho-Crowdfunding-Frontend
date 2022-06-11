import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useEffect,useState } from 'react';
import Slider from '@mui/material/Slider';
import { APIIP } from '../settings/config';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

toast.configure();



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



export default function DonateModal({req,updateFunction}) {

  useEffect(() => {    
      var url = APIIP.ip+"/users/"+localStorage.getItem("userId")+"/wallet?sessionKey="+localStorage.getItem("sessionKey");
        
        fetch(url)
        .then((response)=> response.json())
        .then((response => {                        
          setWalletBalance(response.balance);            
        }));
    
  },[])
  
  const notify = (msg,Type) => {
    toast(msg,{
        type: Type,
        theme: ''
    })
  }
  function makeDonation(){
    let obj = {
      donationAmount: donationAmount,      
      donationDescription: donationDescription    
    }
    console.log(obj);
    fetch(APIIP.ip+'/requests/'+req.requestId+'/donate?sessionKey='+localStorage.getItem('sessionKey'), {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then( (response) => {
          updateFunction();
          if(response.ok) {
              notify("Donation succeed","success")
              var url = APIIP.ip+"/users/"+localStorage.getItem("userId")+"/wallet?sessionKey="+localStorage.getItem("sessionKey");
        
              fetch(url)
              .then((response)=> response.json())
              .then((response => {                        
                setWalletBalance(response.balance);            
              }));
              return response.json(); 
          }else{
              notify("Donation Failed","warning");
          }
      }).then(json => {
        setWalletBalance(0);                    
      })
      .catch(err => console.log(err));   
 
        
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [walletBalance,setWalletBalance] = useState(0);
  const [donationAmount,setDonationAmount] = useState(10);
  const [donationDescription,setDonationDescription] = useState("");
  return (
    <div>
      <Button className="contibute-btn" onClick={handleOpen}>♥ Contibute Now</Button>

      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          {
            (localStorage.getItem("sessionKey")!==null && (req.amountRequired-req.amountRecieved)>0)
            ?            
            <>
              <div>                                
                <TextField required id="outlined-basic" label="Say something about donation.." variant="outlined" onChange={(e) => {setDonationDescription(e.target.value)}}/>
                </div>
                <br />
                <Typography id="modal-modal-title">
                  Your Wallet Balance : ₹{walletBalance}
                </Typography>

               
                <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                  {10+"₹ "}
                  
                  
                  <Slider value={donationAmount} onChange={(e)=> {setDonationAmount(e.target.value)}} min={10} max={( (req.amountRequired-req.amountRecieved)<=walletBalance ? (req.amountRequired-req.amountRecieved) : walletBalance)} defaultValue={60} aria-label="Default" valueLabelDisplay="auto" />
                  {( (req.amountRequired-req.amountRecieved)<=walletBalance ? (req.amountRequired-req.amountRecieved) : walletBalance)+"₹"}
                </Stack>                    
                <TextField id="standard-basic" onChange={(e)=> {setDonationAmount(e.target.value)}} value={donationAmount} label="₹ Amount to Donate" variant="standard" />
                <Button onClick={()=> {makeDonation();handleClose();}} className="modal-donate-btn" variant="contained"><i className="fa fa-heart" aria-hidden="true"></i> &nbsp;Donate</Button>
              
            </>              
            :
            <Link to="/login"> <Button variant="contained" className="modal-donate-btn">Login Now To Donate</Button></Link>
          }          
        </Box>
      </Modal>
    </div>
  );
}