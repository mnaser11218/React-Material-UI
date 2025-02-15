import React from 'react'
import {Button, Stack, Container, IconButton, Typography } from '@mui/material'
// import Buttons from '../Buttons'
import DataObjectIcon from '@mui/icons-material/DataObject';
// import MakeStylesHook from '../MakeStylesHook';
import { makeStyles } from '@mui/styles'; // Corrected import


const useStyles = makeStyles({
    btn:{
        color: "orange !important",
        backgroundColor: "green",
        fontSize: 60,
        '&:hover':{
            color: "red !important"
        }
    }
})

function Create() {
    const classes = useStyles()
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


    
        </Container>
 
  )
}

export default Create