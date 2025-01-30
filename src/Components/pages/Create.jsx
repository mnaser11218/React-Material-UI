import React from 'react'
import {Button, Container, Typography } from '@mui/material'
// import Buttons from '../Buttons'

function Create() {
  return (
//    <Typography 
//     variant="h1"
//     color="primary"
//     align="center"
//     border="solid"
//     >
//     Create a new note
//    </Typography>

<Container  >
   <Typography 
   variant="h4"
    color="textSecondary"
    noWrap
    // border="solid"
    gutterBottom={true}
    >
Create a New Note
   </Typography>
   <Button
   variant="contained"
   onClick={()=> console.log("you clicked submit")}
   >
    SUBMIT</Button>

    </Container>
 
  )
}

export default Create