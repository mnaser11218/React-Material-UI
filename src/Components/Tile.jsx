import { Box, Container, Grid, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TileCard from './TileCard'
import LeftSidebar from './LeftSideBar'
import { useLocation, useNavigate } from 'react-router-dom';


function Tiles() {
    const location = useLocation();
    const [cockpitData, setCockpitData] = useState({})
  const analysisId = location.state?.data;

  const fetchData = async ()=>{
    const response = await fetch(`http://0.0.0.0:8000/code_cockpit_dashboard?analysis_id=${analysisId}`)
    const data = await response.json()
    setCockpitData(data.data)
  }

  useEffect(()=>{
    fetchData()
  },[])
   
  return (

    <Box sx={{ display: 'flex' }}>
               <LeftSidebar tab1="Project Definition" tab2="Custom Code Cockpit" tab3="Process Impact"/>

    <Container sx={{ marginTop: 15}}>

<Grid container spacing={5}>
  { cockpitData ? cockpitData.map((obj, key) => {
    const mdSize = obj.graphData ? 8 : 4
    return (
      <Grid key={key} item xs={12} sm={6} md={mdSize}>
        <TileCard 
          title={obj.title} 
          amount={obj?.amount} 
          endpoint={obj.endpoint}  
          graphData={obj.graphData} 
        />
      </Grid>
    )
  }) : null}
</Grid>
    </Container>

    </Box>
  )
}

export default Tiles