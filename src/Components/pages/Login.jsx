import LockOutlined from '@mui/icons-material/LockOutlined'
import { Avatar, Button, FormControl, Grid2, Link, Paper, TextField, Typography } from '@mui/material'
import React from 'react'

function MuiLogin() {
  const paperstyle = {
  padding: 20, minHeight: '500px', width: 350, margin: '80px auto',display: 'flex', flexDirection: 'column',gap: '30px'}

  return (
<Grid2>
<Paper elevation={3} style={paperstyle}>
  <Grid2  align="center">
    <Avatar sx={{backgroundColor: '#86e186'}}><LockOutlined/> </Avatar>
    <Typography variant='h5'>Sign In</Typography> 
  </Grid2>
  <TextField placeholder='Enter username' label='username' fullWidth required variant='standard' />
  <TextField placeholder='Enter password' label='password'  type='password' fullWidth required variant='standard' />
  <Button variant="contained" color='primary' fullWidth>Login</Button>

  <Typography>Do you have an account? 
    <Link href="/register">Sign up</Link>
  </Typography>
</Paper>
</Grid2>  
)
}

export default MuiLogin