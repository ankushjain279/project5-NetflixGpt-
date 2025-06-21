import { createSlice } from "@reduxjs/toolkit"

const movieslice=createSlice({
    name:'movies',
    initialState:{
        getNowPlayingMovie:null,
        getVideoTrailer:null
    },
    reducers:{
        addNowPlayingMovie:(state,action)=>{
            state.getNowPlayingMovie=action.payload
        },
        addVideoTrailer:(state,action)=>{
            state.getVideoTrailer=action.payload
        }
    }
})

export default movieslice.reducer
export const {addNowPlayingMovie,addVideoTrailer}=movieslice.actions