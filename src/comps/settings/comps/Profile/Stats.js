import { Chart } from 'react-charts'
import { Card, CardContent,Typography } from '@mui/material';
import Box from '@mui/material/Box';
import {useMemo} from 'react';
const Stats = () => {
    return ( 
        <Box sx={{  m: 3 }}>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant='h5'   color="text.secondary" gutterBottom>Stats</Typography>
                    <MyChart/>  
                </CardContent>
            </Card>
        </Box>
     );
}

function MyChart() {
    const data = useMemo(
      () => [
        {
          label: 'Donation',
          data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
        },
        {
          label: 'Support',
          data: [[0, 4], [1, 1], [2, 5], [3, 6], [4, 4]]
        }
      ],
      []
    )
   
    const axes = useMemo(
      () => [
        { primary: true, type: 'linear', position: 'bottom' },
        { type: 'linear', position: 'left' }
      ],
      []
    )
   
    const lineChart = (
      
      <div style={{ width: '100%', height: '300px'}}>
        <Chart data={data} axes={axes} />
      </div>
    )
    return lineChart
  }
 
export default Stats;