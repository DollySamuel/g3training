import { Button, TextField } from '@mui/material'
import React, { useContext } from 'react'
import { multistepContext } from '../Stepcontext'

export default function SecondStep() {
    const {setStepValue,userData,setUserData} = useContext(multistepContext)
  return (
    <div>
       <div>
        <TextField  value = {userData["email"]} onChange = {(e) => setUserData({...userData, "email" : e.target.value})}  label ="Email" margin="normal" variant ="outlined" color='secondary'/>
        </div>
        <div>
        <TextField  value = {userData["country"]} onChange = {(e) => setUserData({...userData, "country" : e.target.value})}  label ="Country" margin="normal" variant ="outlined" color='secondary'/>
        </div>
        <div>
        <TextField  value = {userData["state"]} onChange = {(e) => setUserData({...userData, "state" : e.target.value})}  label ="State" margin="normal" variant ="outlined" color='secondary'/>
        </div>
        <div>
        <Button variant ="contained" color="secondary" onClick = {() => setStepValue(1)}>Back</Button><span> </span>
        <Button variant ="contained" color="primary" onClick = {() => setStepValue(3)}>Next</Button>
      </div>
    </div>
  )
}
