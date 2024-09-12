import { Button, TextField } from '@mui/material'
import React from 'react'

export default function ThridStep() {
  return (
    <div>
       <div>
        <TextField label ="City" margin="normal" variant ="outlined" color='secondary'/>
        </div>
        <div>
        <TextField label ="Pincode" margin="normal" variant ="outlined" color='secondary'/>
        </div>
        <div>
        <TextField label ="Address" margin="normal" variant ="outlined" color='secondary'/>
        </div>
        <div>
        <Button variant ="contained" color="primary" >Next</Button>
      </div>
    </div>
  )
}
