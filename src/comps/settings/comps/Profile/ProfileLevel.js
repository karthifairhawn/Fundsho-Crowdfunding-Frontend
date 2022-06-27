import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { LinearProgress } from '@material-ui/core';





export default function ProfileLevel() {
  return (
    <div>
      <Box sx={{ minHeigth:500,minWidth:300,maxWidth: 550,m: 3}}>
          <Card variant="outlined"  sx={{ width: '100%',height:'180px' }}>            
            
            <CardContent sx={{ width: '100%' }}>              
              <Typography variant="h6"  color="text.secondary">Experience</Typography>
              <Typography  sx={{ mb: 3 }}>Level: 22</Typography>
              <LinearProgress variant="determinate" value={40} />     
              <Typography  color="text.secondary">XP: 2324/6000</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                View
              </Button>              
            </CardActions>
          </Card>
      </Box>
    </div>
  );
}
