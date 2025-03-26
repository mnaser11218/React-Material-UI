import * as React from 'react';
import { Checkbox, FormControlLabel, Typography, FormGroup } from '@mui/material';
import { useState } from 'react';

export default function MenuDropdown(props) {
  const { option1, option2, option3, setColumn, setFilterBy, type } = props;

  // Track the state of selected checkboxes
  const [selectedFilters, setSelectedFilters] = useState({
    [option1]: false,
    [option2]: false,
    [option3]: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedFilters((prev) => ({
      ...prev,
      [name]: checked,
    }));

    if (checked) {
      setColumn(name);
      setFilterBy(type);
    } else {
      // Clear the column or filter if unchecked
      setColumn(null);
    }
  };

  return (
    <div>
      <Typography
        variant="h5"
        sx={{
          paddingBottom: '10px',
          fontWeight: 'bold',
          color: '#008CBA',
        }}
      >
        Filter By:
      </Typography>

      <FormGroup sx={{ background: '#f0fbff', borderRadius: '8px', padding: '10px' }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedFilters[option1] || false}
              onChange={handleCheckboxChange}
              name={option1}
              sx={{
                color: '#0f141a',
                '&.Mui-checked': {
                  color: '#007FFF',
                },
              }}
            />
          }
          label={option1}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedFilters[option2] || false}
              onChange={handleCheckboxChange}
              name={option2}
              sx={{
                color: '#0f141a',
                '&.Mui-checked': {
                  color: '#007FFF',
                },
              }}
            />
          }
          label={option2}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedFilters[option3] || false}
              onChange={handleCheckboxChange}
              name={option3}
              sx={{
                color: '#0f141a',
                '&.Mui-checked': {
                  color: '#007FFF',
                },
              }}
            />
          }
          label={option3}
        />
      </FormGroup>
    </div>
  );
}