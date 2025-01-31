import { Box, TextField, MenuItem } from '@mui/material'
import React from 'react'
import { useState } from 'react'

function MuiSelect() {
  const [country, setCountry] = useState('')
  const countries = [{value: "In", country: "india"}, {value: "pa", country: "pakistan"}]
  const [countriesArray, setCountriesArray] = useState([])
  // console.log({countriesArray})
  const handleChange = (e)=>setCountry(e.target.value)
  // const handleChange = (e)=>{
  //   const value = e.target.value
  //   setCountriesArray(typeof value === 'string' ? value.split(','): value)
  //   {console.log(countriesArray)}
  // }
  return (
    <Box width='250px' >
      <TextField label="Select country " color='secondary' select value={country} onChange={handleChange} fullWidth size='small' helperText='Please select a country'>
          <MenuItem value="IN">India</MenuItem>
          {console.log(country)}
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="AU">Australia</MenuItem>
          <MenuItem value="CA">Canada</MenuItem>
      </TextField>
           {/* <TextField label="Select country " select value={country} onChange={handleChange} fullWidth>
          <MenuItem value="IN">India</MenuItem>
          {console.log(country)}
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="AU">Australia</MenuItem>
          <MenuItem value="CA">Canada</MenuItem> */}
         {/* { countries.map(ele=>(<MenuItem  key={ele.value} value={ele.value} >{ele.country}</MenuItem>))}
         {console.log("country selected: ", country)} */}
      {/* </TextField> */} 


      {/* example of multi select dropdown */}
      {/* <TextField label="Select country " select value={countriesArray} onChange={handleChange} fullWidth slotProps={{
        select: {multiple: true}
      }}>
          <MenuItem value="IN">India</MenuItem>
       
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="AU">Australia</MenuItem>
          <MenuItem value="CA">Canada</MenuItem>
      </TextField> */}

    </Box>
  )
}

export default MuiSelect