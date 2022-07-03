import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ProfileInformation from '../../Profile/ProfileInformation';
import {useState,useEffect} from 'react';
import { APIIP } from '../../../config';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,

  };




const UserModel = ({userId,model_text}) => {    

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false); };


    return (
        <div>
          <Button onClick={handleOpen}>{model_text}</Button>
          <Modal open={open} onClose={handleClose} aria-labelledby="parent-modal-title" aria-describedby="parent-modal-description">
            <Box sx={{ ...style, width: 400 }}>                            
              <ProfileInformation userId={userId}/>                         
            </Box>
          </Modal>
        </div>
      );
}
 
export default UserModel;