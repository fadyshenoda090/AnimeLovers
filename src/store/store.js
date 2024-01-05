import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./slices/favorites";
import counterReducer from "./slices/favoritesCounter";
import animiesReducer from "./slices/animeis";

const store=configureStore({
    reducer:{
        favorites: favoritesReducer,
        counter: counterReducer,
        animies: animiesReducer,
    },
});

export default store;