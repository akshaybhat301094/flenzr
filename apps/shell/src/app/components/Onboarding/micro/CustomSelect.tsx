import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, { useEffect, useState } from 'react';

const CustomSelect = ({
  list,
  selectedOption,
  color,
  onChangeSelection,
}: {
  list: Array<string>;
  selectedOption: any;
  color: string;
  onChangeSelection: any;
}) => {
  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={selectedOption}
      onChange={(e) => {
        onChangeSelection(e.target.value);
      }}
      sx={{
        width: 100,
        fontSize: 16,
        height: 35,
        borderRadius: 27,
        color: { color },
        fontWeight: 'bold',
      }}
    >
      {list.map((type: any, key: number) => {
        return (
          <MenuItem value={type} key={'type_' + key}>
            {type}
          </MenuItem>
        );
      })}
    </Select>
  );
};

export default CustomSelect;
