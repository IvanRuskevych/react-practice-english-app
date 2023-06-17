import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://648d6c632de8d0ea11e7d397.mockapi.io';

export const fetchAll = createAsyncThunk(
  'words/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/words');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
