import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./slices/favorites";
import counterReducer from "./slices/favoritesCounter";

const store=configureStore({
    reducer:{
        favorites: favoritesReducer,
        counter: counterReducer,
    },
});

export default store;