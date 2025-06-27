import { createSlice } from "@reduxjs/toolkit";

const Searchgpt=createSlice({
    name:'gpt',
    initialState:{
        toggleSearch:false,
    },
    reducers:{
        addtoggleBtnSearch:(state)=>{
            state.toggleSearch=!state.toggleSearch
        }
    }
})
export default Searchgpt.reducer
export const {addtoggleBtnSearch}=Searchgpt.actions