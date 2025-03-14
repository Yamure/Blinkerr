import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isLoading: false,
    searchQuery: '',
    activeCategory: 'all',
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
  },
});

export const { setLoading, setSearchQuery, setActiveCategory } =
  uiSlice.actions;
export const selectUI = (state) => state.ui;
export default uiSlice.reducer;
