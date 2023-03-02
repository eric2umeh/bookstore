import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
  },

  reducers: {
    checkStatus: (state) => state.categories.push('Under Construction'),
  },
});

export const categoriesAction = categoriesSlice.actions;

export default categoriesSlice.reducer;
