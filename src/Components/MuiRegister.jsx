import LockOutlined from '@mui/icons-material/LockOutlined'
import { Avatar, Button, FormControl, Grid2, Link, Paper, TextField, Typography } from '@mui/material'
import React from 'react'

function MuiRegister() {
  const paperstyle = {
  padding: 20, height: '70vh', width: 350, margin: '20px auto',display: 'flex', flexDirection: 'column',gap: '20px'}

  return (
<Grid2>
<Paper elevation={10} style={paperstyle} >
  <Grid2  align="center">
    <Avatar sx={{backgroundColor: '#86e186'}}><LockOutlined/> </Avatar>
    <Typography variant='h4'>Register</Typography> 
  </Grid2>

  <TextField placeholder='Enter firstname' label='firstname' fullWidth required variant='standard' />
  <TextField placeholder='Enter lastname' label='lastname' fullWidth required variant='standard' />
  <TextField placeholder='Enter username' label='username' fullWidth required variant='standard' />


  <TextField placeholder='Enter password' label='password'  type='password' fullWidth required variant='standard' />
  <TextField placeholder='Enter password' label='re-enter password'  type='password' fullWidth required variant='standard' />

  <Button variant="contained" color='primary' fullWidth>Register</Button>


</Paper>
</Grid2>  
)
}

export default MuiRegister