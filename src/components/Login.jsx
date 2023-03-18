import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div align="center">
      
     <Typography variant='hs' color='secondary'>'Welcome to React</Typography><br></br>
     <TextField label='email' variant='outlined'/><br></br>
     <TextField label='password' type='password' variant='filled'/><br></br>
     <Button variant='contained' color='primary'>Login</Button><br></br>
     </div>
  )
}

export default Login
