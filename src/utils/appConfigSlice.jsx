import { createSlice } from "@reduxjs/toolkit"

const appConfigSlice=createSlice({
    name:'app',
    initialState:{
        lang:'en',
        showMovie:false,
    },
    reducers:{
        setLang:(state,action)=>{
            state.lang=action.payload
        },
        setmovie:(state,action)=>{
            state.showMovie=action.payload
        }
    }
})
export default appConfigSlice.reducer
export const {setLang,setmovie}=appConfigSlice.actions