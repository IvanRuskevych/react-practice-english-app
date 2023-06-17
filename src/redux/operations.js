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

export const deleteWord = createAsyncThunk(
  'words/deleteWord',
  async (wordId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/words/${wordId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addWord = createAsyncThunk(
  'word/addWord',
  async (word, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/words`, word);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editWord = createAsyncThunk(
  'word/editWord',
  async (word, { rejectWithValue }) => {
    try {
      const response = await axios.put(`/words/${word.id}`, word);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const checkWord = createAsyncThunk(
  'word/checkWord',
  async (word, { rejectWithValue }) => {
    try {
      const response = await axios.put(`/words/${word.id}`, word);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// функції генератори
// function* hello(){}
