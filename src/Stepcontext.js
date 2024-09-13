import React, { useState } from 'react'
import App from './App';

export const multistepContext = React.createContext();

function Stepcontext() {
    const [currentStep, setStepValue] = useState(1);
    const [userData,setUserData] = useState([])
    const [finalData,setFinalData] = useState([])

    function submitData() {
        setFinalData(finalData => [...finalData, userData]);
        setUserData('');
        setStepValue(1)
    }
  return (
    <div>
      <multistepContext.Provider  value = {{currentStep, setStepValue, userData,setUserData, finalData,setFinalData,submitData}}>
        <App/>
      </multistepContext.Provider>
    </div>
  )
}

export default Stepcontext
