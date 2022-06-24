import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ProfileInformation from '../../Profile/ProfileInformation';
import BalanceContainer from '../../Wallet/BalanceContainer';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    
    bgcolor: 'background.paper',
    border: '2px solid #000',    
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',    
    padding:'10px',
    borderRadius: '20px'
  };


const WalletModel = ({balance}) => {    
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => {
          setOpen(true);
        };
        const handleClose = () => {
          setOpen(false);
        };
      
        return (
          <>
            <Button onClick={handleOpen}>Wallet</Button>
            <Modal
              hideBackdrop
              open={open}
              onClose={handleClose}
              aria-labelledby="child-modal-title"
              aria-describedby="child-modal-description"              
            >
              <Box sx={{ ...style }}>
                <BalanceContainer balance={balance} admin={"true"}/>
                <Button onClick={handleClose}>Close Wallet</Button>
              </Box>
            </Modal>          
            </>     
        );     
}
 
export default WalletModel;