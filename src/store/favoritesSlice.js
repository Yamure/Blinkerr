import { createSlice } from "@reduxjs/toolkit";

const loadFavorites = () => {
  try {
    const saved = localStorage.getItem("favorites");
    const favorites = saved ? JSON.parse(saved) : [];
    // Filter out any string IDs and ensure we only have valid link objects
    return favorites.filter((fav) => typeof fav === "object" && fav !== null);
  } catch (error) {
    console.error("Error loading favorites:", error);
    return [];
  }
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: loadFavorites(),
  reducers: {
    toggleFavorite: (state, action) => {
      const index = state.findIndex((fav) => fav.id === action.payload.id);

      if (index !== -1) {
        // Remove from favorites if exists
        state.splice(index, 1);
      } else {
        // Add to favorites if doesn't exist
        // Ensure we're only adding objects, not IDs
        if (typeof action.payload === "object" && action.payload !== null) {
          state.push(action.payload);
        }
      }
      // Save to localStorage
      localStorage.setItem("favorites", JSON.stringify(state));
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;

// Selectors
export const selectFavorites = (state) =>
  // Ensure we only return valid link objects
  state.favorites.filter((fav) => typeof fav === "object" && fav !== null);

export const selectIsFavorite = (state, id) =>
  state.favorites.some((fav) => fav?.id === id);

export default favoritesSlice.reducer;
