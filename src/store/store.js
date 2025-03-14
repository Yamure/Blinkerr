import { configureStore } from '@reduxjs/toolkit';
import favouritesReducer from '@slices/favourites';
import uiReducer from '@slices/ui';

export const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
    ui: uiReducer,
  },
});
