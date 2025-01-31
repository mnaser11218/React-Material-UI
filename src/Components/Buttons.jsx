import React from 'react'
import { Box, Stack, Button, ButtonGroup, Container, IconButton } from '@mui/material'
import DataObjectIcon from '@mui/icons-material/DataObject';
// import MakeStylesHook from '../MakeStylesHook';
import { makeStyles } from '@mui/styles'; // Corrected import
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


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
function Buttons() {
  const classes= useStyles()
  return (
//     <div >
//         <Button variant="contained" >Primary 1</Button>
//         <Button>Primary 2</Button>
//         <Button>Primary 3</Button>
//         <Button variant="outlined">Primary 4</Button>
//         <Button type="submit">Primary 5</Button>
//         <Button href='/notes'>Primary 6</Button>
// <br></br>
//         <ButtonGroup variant='text' color="primary">
//         <Button  >Primary 1</Button>
//         <Button  >Primary 1</Button>
//         <Button>Primary 1</Button>
//         <Button  >Primary 1</Button>
//         <Button  >Primary 1</Button>
//         </ButtonGroup>
//         <br></br>
//         <Box display="flex" justifycontent="space-evenly" flexWrap="wrap">
//         <Button  >Primary 1</Button>
//         <Button  >Primary 1</Button>
//         <Button>Primary 1</Button>
//         <Button  >Primary 1</Button>
//         <Button  >Primary 1</Button>

//         <Button  >Primary 1</Button>
//         <Button  >Primary 1</Button>
//         <Button>Primary 1</Button>
//         <Button  >Primary 1</Button>
//         <Button  >Primary 1</Button>
//         <Button  >Primary 1</Button>
//         <Button  >Primary 1</Button>
//         <Button>Primary 1</Button>
//         <Button  >Primary 1</Button>
//         <Button  >Primary 1</Button>
//         <Button  >Primary 1</Button>
//         <Button  >Primary 1</Button>
//         <Button>Primary 1</Button>
//         <Button  >Primary 1</Button>
//         <Button  >Primary 1</Button>



//         </Box>
<Container>
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
     size="small" variant="contained" color='seconday' onClick={()=> console.log("clicked obj button")} startIcon={<DataObjectIcon fontSize="large"/>}>
Object
    </Button>
    <Button  size="large" variant="contained" color='error' onClick={()=> console.log("clicked obj button")} startIcon={<DataObjectIcon fontSize="large"/>}>
Object
    </Button>
    <Button size="small" variant="contained" color='warning' onClick={()=> console.log("clicked obj button")} startIcon={<DataObjectIcon fontSize="large"/>}>
Object
    </Button>
    <Button variant="contained" color='info' onClick={()=> console.log("clicked obj button")} startIcon={<DataObjectIcon fontSize="large"/>}>
Object
    </Button>
    <Button variant="contained" color='success' onClick={()=> console.log("clicked obj button")} startIcon={<DataObjectIcon fontSize="large"/>}>
Object
    </Button>
    <IconButton>
<DeleteOutlineIcon/>
    </IconButton>
    </Stack>
<Stack >
<ButtonGroup orientation="vertical" variant='text'>
  <Button>
    One Button
  </Button>
  <Button>
    two Button
  </Button>
  <Button>
    three Button
  </Button>
</ButtonGroup>

</Stack>
      
    </Container>
  )
}

export default Buttons