import { Button, TextField } from '@mui/material'
import React from 'react'

export default function SecondStep() {
  return (
    <div>
       <div>
        <TextField label ="Email" margin="normal" variant ="outlined" color='secondary'/>
        </div>
        <div>
        <TextField label ="Country" margin="normal" variant ="outlined" color='secondary'/>
        </div>
        <div>
        <TextField label ="State" margin="normal" variant ="outlined" color='secondary'/>
        </div>
        <div>
        <Button variant ="contained" color="primary" >Next</Button>
      </div>
    </div>
  )
}
