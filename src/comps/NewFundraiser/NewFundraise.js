import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Navbar from '../footer_header/navbar';
import EducationInformation from './EducationInformation';
import EventInformation from './EventInformation';
import PersonalInformation from './PersonalInformationForm';

const steps = ['Fundraiser Information', 'Education Information', 'Event Information'];

export default function NewFundraiser() {
  const [activeStep, setActiveStep] = React.useState(0);    

  const handleNext = () => {    setActiveStep((prevActiveStep) => prevActiveStep + 1);    };

  const handleBack = () => {setActiveStep((prevActiveStep) => prevActiveStep - 1);};

  return (
    <>
    <Navbar/>
    <div className="d-flex justify-content-center">
        <Box className="col-lg-10 col-sm-10 m-3">
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};                                    
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>

            {
            activeStep === steps.length ?                                 
                <Typography sx={{ mt: 2, mb: 1 }}> All steps completed - you&apos;re finished</Typography>                
            :         
                <React.Fragment>
                    {activeStep === 0 && (  <PersonalInformation/>  )}                
                    {activeStep === 1 && <EducationInformation/>}    
                    {activeStep === 2 && <EventInformation/> }    
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button color="inherit" disabled={activeStep === 0} onClick={handleBack}sx={{ mr: 1 }}>Back</Button>
                        <Box sx={{ flex: '1 1 auto' }} />                        
                        <Button onClick={handleNext}>{activeStep === steps.length - 1 ? 'Submit' : 'Next'}</Button>
                    </Box>
                </React.Fragment>                
            }
        </Box>
        </div>
    </>
  );
}
