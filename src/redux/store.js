import { configureStore } from '@reduxjs/toolkit';
import { wordsReducer } from './wordSlice';

export const store = configureStore({
  reducer: {
    words: wordsReducer,
  },
});
