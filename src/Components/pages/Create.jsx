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
   <Stack spacing={5} direction={"row"} >
   <Button
   className={classes.btn}
   variant="contained"
   onClick={()=> console.log("you clicked submit")}
   >
    SUBMIT</Button>
    {/* <IconButton onSubmit={()=> console.log("clicked icon")}>
    <DataObjectIcon/>
    </IconButton> */}
    <Button onClick={()=> console.log("clicked obj button")} startIcon={<DataObjectIcon fontSize="large"/>}>
Object
    </Button>
    <Button onClick={()=> console.log("clicked obj button")} startIcon={<DataObjectIcon fontSize="large"/>}>
Object
    </Button>
    <Button onClick={()=> console.log("clicked obj button")} startIcon={<DataObjectIcon fontSize="large"/>}>
Object
    </Button>
    <Button onClick={()=> console.log("clicked obj button")} startIcon={<DataObjectIcon fontSize="large"/>}>
Object
    </Button>
    </Stack>
    {/* <DataObjectIcon fontSize="medium" color="secondary"/> */}
    <Stack spacing={5} direction={"row"} >
   <Button
   className={classes.btn}
   variant="contained"
   color='primary'
   onClick={()=> console.log("you clicked submit")}
   >
    SUBMIT</Button>
    {/* <IconButton onSubmit={()=> console.log("clicked icon")}>
    <DataObjectIcon/>
    </IconButton> */}
    <Button
      variant="contained" color='seconday' onClick={()=> console.log("clicked obj button")} startIcon={<DataObjectIcon fontSize="large"/>}>
Object
    </Button>
    <Button  variant="contained" color='error' onClick={()=> console.log("clicked obj button")} startIcon={<DataObjectIcon fontSize="large"/>}>
Object
    </Button>
    <Button variant="contained" color='warning' onClick={()=> console.log("clicked obj button")} startIcon={<DataObjectIcon fontSize="large"/>}>
Object
    </Button>
    <Button variant="contained" color='info' onClick={()=> console.log("clicked obj button")} startIcon={<DataObjectIcon fontSize="large"/>}>
Object
    </Button>
    <Button variant="contained" color='success' onClick={()=> console.log("clicked obj button")} startIcon={<DataObjectIcon fontSize="large"/>}>
Object
    </Button>
    </Stack>

    
        </Container>
 
  )
}

export default Create