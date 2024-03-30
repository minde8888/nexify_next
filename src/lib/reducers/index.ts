"use client";
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import themeReducer from "../features/themeSlice";


const rootReducer = combineReducers({
    theme: themeReducer,
},);

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;