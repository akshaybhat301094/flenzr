import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, { useState } from 'react';

const CustomSelect = () => {
  const [userType, setUserType] = React.useState('Flenzr');
  const [color, setColor] = useState('#05f');

  const handleChange = (event: SelectChangeEvent) => {
    setUserType(event.target.value);
    if (event.target.value === 'Brand') {
      setColor('#10d876');
    } else {
      setColor('#05f');
    }
  };

  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={userType}
      onChange={handleChange}
      sx={{
        width: 100,
        fontSize: 16,
        height: 35,
        borderRadius: 27,
        color: color,
        fontWeight: 'bold',
      }}
    >
      <MenuItem value={'Flenzr'}>Flenzr</MenuItem>
      <MenuItem value={'Brand'}>Brand</MenuItem>
    </Select>
  );
};

export default CustomSelect;
