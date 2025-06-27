import { createSlice } from "@reduxjs/toolkit"

const appConfigSlice=createSlice({
    name:'app',
    initialState:{
        lang:'en'
    },
    reducers:{
        setLang:(state,action)=>{
            state.lang=action.payload
        }
    }
})
export default appConfigSlice.reducer
export const {setLang}=appConfigSlice.actions