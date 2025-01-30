import React from 'react'
import {Button, Container, IconButton, Typography } from '@mui/material'
// import Buttons from '../Buttons'
import DataObjectIcon from '@mui/icons-material/DataObject';

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
    {/* <IconButton onSubmit={()=> console.log("clicked icon")}>
    <DataObjectIcon/>
    </IconButton> */}
    <Button  onClick={()=> console.log("clicked obj button")} startIcon={<DataObjectIcon fontSize="large" color="secondary"/>}>
Object
    </Button>
    <DataObjectIcon fontSize="medium" color="secondary"/>
    
        </Container>
 
  )
}

export default Create