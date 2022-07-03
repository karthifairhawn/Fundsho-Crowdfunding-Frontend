import { Box, Button, Card, CardContent, InputLabel, MenuItem, Modal, Select } from "@mui/material";
import React from "react";
import { APIIP } from "../Settings/config";

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




const UpdateFundraiseModel = ({requestId,reloadRequest}) => {    

    const [open, setOpen] = React.useState(false);
    const [newStatusValue,setNewStatusValue] = React.useState(5);
    const handleOpen = () => { setOpen(true); };
    const handleClose = () => { 
        setOpen(false); 
    };


    function updateRequestStatus(status){
        setNewStatusValue(status.target.value);    
        if(status.target.value==5) return;
        fetch(APIIP.ip+"/admin/requests/"+requestId+"/status?status="+status.target.value+"&sessionKey="+localStorage.getItem("sessionKey"),{
            mode: 'cors',                                 
            method: 'PUT'            
        }).then(response => {
            console.log(response);
            reloadRequest(true);
        })
    }


    return (
        <div>
          <Button variant="contained" sx={{m:0,mt:2}} onClick={handleOpen}>{"Manage Fundraising"}</Button>
          <Modal open={open} onClose={handleClose} aria-labelledby="parent-modal-title" aria-describedby="parent-modal-description">
            <Box sx={{ ...style, width: 400 }}>                            
                <Card>
                    <CardContent>
                        <InputLabel id="demo-simple-select-label">Change status:</InputLabel>
                        <Select 
                         labelId="demo-simple-select-label"
                         id="demo-simple-select"                         
                         label="Age"    
                         sx={{width:"100%",height:30}}      
                         value={newStatusValue}
                         onChange={updateRequestStatus}               
                        >
                            <MenuItem value={0}>Pending</MenuItem>
                            <MenuItem value={1}>Active</MenuItem>                                                        
                            <MenuItem value={6}>Admin Closed</MenuItem>                                                        
                        </Select>          
                        <Button onClick={handleClose} variant="contained" sx={{mt:1}}>Update</Button>
                    </CardContent>
                </Card>                 
            </Box>
          </Modal>
        </div>
      );
}

export default UpdateFundraiseModel;