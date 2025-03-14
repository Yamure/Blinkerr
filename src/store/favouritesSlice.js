import { createSlice, createSelector } from "@reduxjs/toolkit";

const loadFavourites = () => {
  try {
    const saved = localStorage.getItem("favourites");
    const favourites = saved ? JSON.parse(saved) : [];
    // Filter out any string IDs and ensure we only have valid link objects
    return favourites.filter((fav) => typeof fav === "object" && fav !== null);
  } catch (error) {
    console.error("Error loading favourites:", error);
    return [];
  }
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: loadFavourites(),
  reducers: {
    toggleFavourite: (state, action) => {
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
      localStorage.setItem("favourites", JSON.stringify(state));
    },
  },
});

export const { toggleFavourite } = favouritesSlice.actions;

// Selectors
export const selectFavourites = createSelector(
  (state) => state.favourites,
  (favourites) =>
    favourites.filter((fav) => typeof fav === "object" && fav !== null),
);
export const selectIsFavourite = (state, id) =>
  state.favourites.some((fav) => fav?.id === id);

export default favouritesSlice.reducer;
