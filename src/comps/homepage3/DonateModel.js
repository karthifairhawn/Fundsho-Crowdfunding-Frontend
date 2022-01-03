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

    if(localStorage.getItem("sessionkey")!==null){
      fetch(APIIP.ip+"/getuser/"+localStorage.getItem("sessionkey"))
      .then((response)=> response.json())
      .then((response => {
          setWalletBalance(response.wallet.balance);        
      }));
    }
  },[])
  
  const notify = (msg,Type) => {
    toast(msg,{
        type: Type,
        theme: ''
    })
  }
  function makeDonation(){
    let obj = {
      donationAmount : donationAmount,
      requestId : req.requestId,
      sessionId : localStorage.getItem("sessionkey")
    }
      
    fetch(APIIP.ip+'/donatereq', {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then( (response) => {
        updateFunction();
        if(response.ok) {
            notify("Donation succeed","success")
            return response.json();
        }else{
            notify("Donation Failed","warning");
        }
    }) 
    .then(json => {
      setWalletBalance(json.balance)            
    })
    .catch(err => console.log(err));   
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [walletBalance,setWalletBalance] = useState(0);
  const [donationAmount,setDonationAmount] = useState(10);

  return (
    <div>
      <Button className="contibute-btn" onClick={handleOpen}>♥ Contibute Now</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {
            localStorage.getItem("sessionkey")!==null

            ?

            <>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Your Wallet Balance : ₹{walletBalance}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>    
              <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                {10+"₹ "}
                <Slider value={donationAmount} onChange={(e)=> {setDonationAmount(e.target.value)}} min={10} max={Math.min(req.amountRequired,walletBalance)} defaultValue={60} aria-label="Default" valueLabelDisplay="auto" />
                {Math.min(req.amountRequired,walletBalance)+"₹"}
              </Stack>                    
                <TextField id="standard-basic" onChange={(e)=> {setDonationAmount(e.target.value)}} value={donationAmount} label="₹ Amount to Donate" variant="standard" />
                <Button onClick={()=> {makeDonation();handleClose();}} className="modal-donate-btn" variant="contained"><i className="fa fa-heart" aria-hidden="true"></i> &nbsp;Donate</Button>
              </Typography>
            </>  

            
            :

            <Link to="/login"> <Button variant="contained" className="modal-donate-btn">Login Now To Donate</Button></Link>
          }          
        </Box>


      </Modal>
    </div>
  );
}