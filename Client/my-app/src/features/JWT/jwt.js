import { createSlice } from "@reduxjs/toolkit";

export const jwtSlice=createSlice({
    name:'jwt',
    initialState:{
        jwts:[]
    },
    reducers:{
        addjwt:(state,action)=>{
            const jwt={
                
                text:action.payload,
            }
            state.jwts.push(jwt)

        },
        logout:(state,action)=>{
            state.jwts=[]
        }
    }
})

export const {addjwt,logout} = jwtSlice.actions
export default jwtSlice.reducer