import { Box, TextField, MenuItem } from '@mui/material'
import React from 'react'
import { useState } from 'react'

function MuiSelect() {
  const [country, setCountry] = useState('')
  const countries = [{value: "In", country: "india"}, {value: "pa", country: "pakistan"}]
  const [countriesArray, setCountriesArray] = useState([])
  // console.log({countriesArray})
  const handleChange = (e)=>setCountry(e.target.value)

  return (
    <Box width='250px' >
      <TextField label="Select country " color='secondary' select value={country} onChange={handleChange} fullWidth size='small' helperText='Please select a country'>
          <MenuItem value="IN">India</MenuItem>
          {console.log(country)}
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="AU">Australia</MenuItem>
          <MenuItem value="CA">Canada</MenuItem>
      </TextField>
  

    </Box>
  )
}

export default MuiSelect