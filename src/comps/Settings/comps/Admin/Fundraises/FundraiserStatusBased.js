import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FundraiserStatusBased({fetchStatus,setFetchStatus}) {  

  const handleChange = (event) => {
    setFetchStatus(event.target.value);
  };

  return (
    <Box sx={{ width: 200,margin:1 }}>
      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label" >Status</InputLabel>
        <Select
        sx={{ height:30}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={fetchStatus}
          label="Status"
          onChange={handleChange}
        >
          <MenuItem value={1}>Approved</MenuItem>
          <MenuItem value={2}>Succeed</MenuItem>          
          <MenuItem value={0}>Pending</MenuItem>          
          <MenuItem value={3}>User Withdrawn</MenuItem>          
          <MenuItem value={4}>Expired</MenuItem>          
          <MenuItem value={6}>Admin Closed</MenuItem>          
        </Select>
      </FormControl>
    </Box>
  );
}