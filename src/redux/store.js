import { configureStore } from '@reduxjs/toolkit';
import { wordsReducer } from './wordSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    words: wordsReducer,
    filter: filterReducer,
  },
});
