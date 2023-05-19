import React from 'react';
import TextField from '@mui/material/TextField';
import css from './Filter.module.css';

export default function Filter({ handleChange, value }) {
  return (
    <TextField
      id="filter"
      name="filter"
      label="Filter"
      variant="outlined"
      value={value}
      onChange={handleChange}
      className={css.Filter}
      style={{ marginTop: '50px' }}
    />
  );
}
