import { Button, Container, Stack, TextField } from '@mui/material'
import React from 'react'

function MuiTextField() {
  return (


 
    <Stack spacing={4}>
        <Stack direction="column" spacing={2}>
 <TextField label="name" variant='outlined'/>
 <TextField size="small" label="name" variant='filled'/>
 <TextField size="small" label="name" variant='standard' required/>
 <Button>Submit</Button>
        </Stack>

        <Stack direction="column" spacing={2}>
 <TextField label="name" variant='outlined' error/>
 <TextField size="small" label="name" variant='filled' helperText="do not share your password" />
 <TextField size="small" label="password" type='password' variant='standard' required/>
 <Button>Submit</Button>
        </Stack>
    </Stack>
 
  )
}

export default MuiTextField