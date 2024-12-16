import { createSlice } from '@reduxjs/toolkit';

const loadFavorites = () => {
  try {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error('Error loading favorites:', error);
    return [];
  }
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: loadFavorites(),
  reducers: {
    toggleFavorite: (state, action) => {
      const index = state.findIndex(fav => fav.id === action.payload.id);

      if (index !== -1) {
        // Remove from favorites if exists
        state.splice(index, 1);
      } else {
        // Add to favorites if doesn't exist
        state.push(action.payload);
      }
      // Save to localStorage
      localStorage.setItem('favorites', JSON.stringify(state));
    },
  }
});

export const { toggleFavorite } = favoritesSlice.actions;

// Selectors
export const selectFavorites = (state) => state.favorites;
export const selectIsFavorite = (state, id) =>
  state.favorites.some(fav => fav.id === id);

export default favoritesSlice.reducer;
