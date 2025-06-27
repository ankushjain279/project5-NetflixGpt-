import { createSlice } from "@reduxjs/toolkit"

const movieslice=createSlice({
    name:'movies',
    initialState:{
        getNowPlayingMovie:null,
        getPopularMovie:null,
        getTopRated:null,
        getVideoTrailer:null,
        getUpcomingMovie:null,
    },
    reducers:{
        addNowPlayingMovie:(state,action)=>{
            state.getNowPlayingMovie=action.payload
        },
        addPopularMovie:(state,action)=>{
            state.getPopularMovie=action.payload
        },
        addTopRated:(state,action)=>{
            state.getTopRated=action.payload
        },
        addUpcomingMovie:(state,action)=>{
            state.getUpcomingMovie=action.payload
        },
        addVideoTrailer:(state,action)=>{
            state.getVideoTrailer=action.payload
        }
    }
})

export default movieslice.reducer
export const {addNowPlayingMovie,addVideoTrailer,addPopularMovie,addTopRated,addUpcomingMovie}=movieslice.actions