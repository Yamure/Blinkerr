import { configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "./favouritesSlice";
import uiReducer from "./uiSlice";

export const store = configureStore({
    reducer: {
        favourites: favouritesReducer,
        ui: uiReducer,
    },
});
