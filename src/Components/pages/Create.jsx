import React from 'react'
import {Button, Container, IconButton, Typography } from '@mui/material'
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
   <Button
   className={classes.btn}
   variant="contained"
   onClick={()=> console.log("you clicked submit")}
   >
    SUBMIT</Button>
    {/* <IconButton onSubmit={()=> console.log("clicked icon")}>
    <DataObjectIcon/>
    </IconButton> */}
    <Button className={classes.btn} onClick={()=> console.log("clicked obj button")} startIcon={<DataObjectIcon fontSize="large"/>}>
Object
    </Button>
    <DataObjectIcon fontSize="medium" color="secondary"/>
    
        </Container>
 
  )
}

export default Create