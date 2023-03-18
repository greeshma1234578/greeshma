import { TextField, Button } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
    <TextField label='First name'/><br></br>
     <TextField label='Last name'/><br></br>
     <TextField label='Email'/><br></br>
     <TextField label='password' type='password'/><br></br>
     <Button variant='contained'>Signup</Button>
    </div>
  )
}

export default Signup
