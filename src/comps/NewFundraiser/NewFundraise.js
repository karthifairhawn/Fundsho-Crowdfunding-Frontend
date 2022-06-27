import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Navbar from '../Footers_Header/navbar';
import EducationInformation from './EducationInformation';
import EventInformation from './EventInformation';
import PersonalInformation from './PersonalInformationForm';

const steps = ['Fundraiser Information', 'Education Information', 'Event Information'];
var raisingData = {
    "fname": "string",
    "lname": "string",
    "gender": "string",
    "background": "string",
    "dateOfBirth": "2022-06-25T10:00:26.394Z",
    "institutionName": "string",
    "studyProgram": "string",
    "institutePlace": "string",
    "additionalEdInfo": "string",
    "phoneNumber": "string",
    "address": "string",
    "city": "string",
    "pinCode": "string",
    "stateRegion": "string",
    "personalEmail": "string",
    "eventImageUrl": "string",
    "eventTitle": "string",
    "amountRequired": 0,
    "deadLine": "2022-06-25T10:00:26.394Z",
    "addtionalFilesUrl": "string",
    "eventDescription": "string",
    "sessionId": "string"
  };
export default function NewFundraiser() {
  const [activeStep, setActiveStep] = React.useState(0);    
  

  function alterValues(key,value){ 
    raisingData[key] = value;
    console.log(raisingData);
  }



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
            <>
                <Typography sx={{ mt: 2, mb: 1 }}> All steps completed - you&apos;re finished</Typography> 
                <span></span>
                </>  
                                           
            :         
                <React.Fragment>
                    {activeStep === 0 && (  <PersonalInformation alterValues={alterValues}/>  )}                
                    {activeStep === 1 && <EducationInformation alterValues={alterValues}/>}    
                    {activeStep === 2 && <EventInformation alterValues={alterValues}/> }    
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
