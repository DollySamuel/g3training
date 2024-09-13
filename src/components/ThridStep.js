import { Button, TextField } from '@mui/material'
import React, { useContext } from 'react'
import { multistepContext } from '../Stepcontext'

export default function ThridStep() {
    const {setStepValue,userData,setUserData, submitData} = useContext(multistepContext)
  return (
    <div>
       <div>
        <TextField value = {userData["city"]} onChange = {(e) => setUserData({...userData, "city" : e.target.value})}  label ="City" margin="normal" variant ="outlined" color='secondary'/>
        </div>
        <div>
        <TextField value = {userData["pincode"]} onChange = {(e) => setUserData({...userData, "pincode" : e.target.value})}  label ="Pincode" margin="normal" variant ="outlined" color='secondary'/>
        </div>
        <div>
        <TextField value = {userData["address"]} onChange = {(e) => setUserData({...userData, "address" : e.target.value})}  label ="Address" margin="normal" variant ="outlined" color='secondary'/>
        </div>
        <div>
        <Button variant ="contained" color="secondary" onClick = {() => setStepValue(2)}>Back</Button><span> </span>
        <Button variant ="contained" color="primary" onClick = {submitData}>SUMBIT</Button>
      </div>
    </div>
  )
}
