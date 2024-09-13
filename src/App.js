import { useContext } from 'react';
import './App.css';
import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep';
import ThridStep from './components/ThridStep';
import {Stepper,StepLabel,Step} from '@mui/material'
import { multistepContext } from './Stepcontext';


function App() {
  const {currentStep, finalData} = useContext(multistepContext);

  function showStep (step) {
    switch(step) {
      case 1 : 
      return <FirstStep/>
      case 2: 
      return <SecondStep/>
      case 3:
        return <ThridStep/>

    default: 
    //do nothing
    }
    
  }

  return (
    <div className='App'>
      <header className='App-header'>
      <h3 style={{color :'blue', textDecoration:'underline'}}>Please Sign Up to Login</h3>
      <div className='center-stepper'>
      <Stepper style={{width : '18%'}} activeStep = {currentStep -1} orientation='horizontal'>
        <Step>
          <StepLabel>

          </StepLabel>
        </Step>
        <Step>
          <StepLabel>
          
          </StepLabel>
        </Step>

        <Step>
          <StepLabel>
          
          </StepLabel>
        </Step>
      </Stepper>
      </div>
      {showStep(currentStep)}
      </header>
    </div>
  );
}

export default App;
