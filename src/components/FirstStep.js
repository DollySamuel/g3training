import React, { useContext } from 'react'
import {Button, TextField} from '@mui/material'
import { multistepContext } from '../Stepcontext'

export default function FirstStep() {
    const {setStepValue,userData,setUserData} = useContext(multistepContext);
  return (
    <div>
        <div>
        <TextField value = {userData["firstName"]} onChange = {(e) => setUserData({...userData, "firstName" : e.target.value})} label ="First name" margin="normal" variant ="outlined" color='secondary'/>
        </div>
        <div>
        <TextField value = {userData["LastName"]} onChange = {(e) => setUserData({...userData, "LastName" : e.target.value})}label ="Last name" margin="normal" variant ="outlined" color='secondary'/>
        </div>
        <div>
        <TextField value = {userData["Contact"]} onChange = {(e) => setUserData({...userData, "Contact" : e.target.value})} label ="Contact Number" margin="normal" variant ="outlined" color='secondary'/>
        </div>
        <div>
        <Button variant ="contained" color="primary" onClick = {() => setStepValue(2)} >Next</Button>
      </div>
    </div>
  )
}
