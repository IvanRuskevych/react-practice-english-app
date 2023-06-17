import React from 'react';
import TextField from '@mui/material/TextField';
import css from './Filter.module.css';

import { selectFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

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
