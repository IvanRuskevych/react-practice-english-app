const { createSlice } = require('@reduxjs/toolkit');
const {
  fetchAll,
  deleteWord,
  addWord,
  editWord,
  checkWord,
} = require('./operations');

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
      })
      .addCase(deleteWord.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteWord.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(word => word.id !== payload.id);
      })
      .addCase(deleteWord.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addWord.pending, state => {
        state.isLoading = true;
      })
      .addCase(addWord.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(payload);
      })
      .addCase(addWord.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(editWord.pending, state => {
        state.isLoading = true;
      })
      .addCase(editWord.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(word => word.id === payload.id);
        state.items.splice(index, 1, payload);
      })
      .addCase(editWord.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(checkWord.pending, state => {
        state.isLoading = true;
      })
      .addCase(checkWord.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(word => word.id === payload.id);
        state.items.splice(index, 1, payload);
      })
      .addCase(checkWord.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

// export const { reducer: wordsReducer } = wordSlice;
export const wordsReducer = wordSlice.reducer;
