import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Transactions from '../../Wallet/Transactions';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',    
    padding:'10px',
    width: '700px',
  };


const TransactionsModel = ({balance,transaction}) => {    
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => {
          setOpen(true);
        };
        const handleClose = () => {
          setOpen(false);
        };
      
        return (
          <>
            <Button onClick={handleOpen}>Transactions</Button>
            <Modal
              hideBackdrop
              open={open}
              onClose={handleClose}
              aria-labelledby="child-modal-title"
              aria-describedby="child-modal-description"              
            >
              <Box sx={{ ...style }}>
                <Transactions transaction={transaction}/>
                <Button onClick={handleClose}>Close Transactions</Button>
              </Box>
            </Modal>          
            </>     
        );     
}
 
export default TransactionsModel;