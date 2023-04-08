import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./registerSlice";

const store = configureStore({
    reducer:userReducer,
});

export default store;