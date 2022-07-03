import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Input,InputLabel } from '@mui/material';

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

export default function AddMoneyMondel() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [amountToAdd,setAmountToAdd] = React.useState(0);

  return (
    <div>
      <button onClick={handleOpen}>+ Add money to wallet</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form>
            <div className="d-flex flex-column">        
                <InputLabel htmlFor="component-outlined">Enter amount to add:</InputLabel>        
                <Input 
                    type="number"
                    value={amountToAdd}
                    onChange={(e)=>setAmountToAdd(e.target.value)}
                    label="Amount to add"    
                    id="component-outlined"        
                />
                <button className="btn btn-primary mt-3">Proceed to Payment</button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
