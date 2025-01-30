import React from 'react'
import { Box, Button, ButtonGroup } from '@mui/material'
function Buttons() {
  return (
    <div >
        <Button variant="contained" >Primary 1</Button>
        <Button>Primary 2</Button>
        <Button>Primary 3</Button>
        <Button variant="outlined">Primary 4</Button>
        <Button type="submit">Primary 5</Button>
        <Button href='/notes'>Primary 6</Button>
<br></br>
        <ButtonGroup variant='text' color="primary">
        <Button  >Primary 1</Button>
        <Button  >Primary 1</Button>
        <Button>Primary 1</Button>
        <Button  >Primary 1</Button>
        <Button  >Primary 1</Button>
        </ButtonGroup>
        <br></br>
        <Box display="flex" justifycontent="space-evenly" flexWrap="wrap">
        <Button  >Primary 1</Button>
        <Button  >Primary 1</Button>
        <Button>Primary 1</Button>
        <Button  >Primary 1</Button>
        <Button  >Primary 1</Button>

        <Button  >Primary 1</Button>
        <Button  >Primary 1</Button>
        <Button>Primary 1</Button>
        <Button  >Primary 1</Button>
        <Button  >Primary 1</Button>
        <Button  >Primary 1</Button>
        <Button  >Primary 1</Button>
        <Button>Primary 1</Button>
        <Button  >Primary 1</Button>
        <Button  >Primary 1</Button>
        <Button  >Primary 1</Button>
        <Button  >Primary 1</Button>
        <Button>Primary 1</Button>
        <Button  >Primary 1</Button>
        <Button  >Primary 1</Button>



        </Box>
        
    </div>
  )
}

export default Buttons