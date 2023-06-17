const { createSlice } = require('@reduxjs/toolkit');
const { fetchAll } = require('./operations');

const wordSlice = createSlice({
  name: 'words',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAll.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAll.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(fetchAll.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

// export const { reducer: wordsReducer } = wordSlice;
export const wordsReducer = wordSlice.reducer;
