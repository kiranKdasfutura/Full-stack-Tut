import {createSlice} from '@reduxjs/toolkit'

const adminSlice = createSlice({
    name:'admin',
    initialState:{admindata:[]},
    reducers:{
        addUsers:(state,action)=>{
            state.admindata.push(action.payload)
        }
    }
})
export default adminSlice.reducer
export const {addUsers}= adminSlice.actions