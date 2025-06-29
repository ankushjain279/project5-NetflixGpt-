import { createSlice } from "@reduxjs/toolkit";

const Searchgpt=createSlice({
    name:'gpt',
    initialState:{
        toggleSearch:false,
        gptMovies:null, 
        gptMoviesName:null, 
    },
    reducers:{
        addtoggleBtnSearch:(state)=>{
            state.toggleSearch=!state.toggleSearch
        },
        addgptMovies:(state,action)=>{
            const{movieNames,movieResults}=action.payload
            state.gptMoviesName=movieNames
            state.gptMovies=movieResults
        }
    }
})
export default Searchgpt.reducer
export const {addtoggleBtnSearch,addgptMovies }=Searchgpt.actions