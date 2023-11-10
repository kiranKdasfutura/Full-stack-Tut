import { configureStore } from "@reduxjs/toolkit";
import adminReducer from '../Redux/adminSlice'
export const store= configureStore({
    reducer:adminReducer
})