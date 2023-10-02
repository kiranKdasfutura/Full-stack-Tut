import { configureStore } from "@reduxjs/toolkit";
import jwtReducer from '../features/JWT/jwt'
export default configureStore({
    reducer:jwtReducer,

})