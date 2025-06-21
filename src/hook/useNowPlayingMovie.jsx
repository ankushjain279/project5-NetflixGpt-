import React, { useEffect} from 'react';
import {addNowPlayingMovie} from '../utils/movieslice'
import { API_OPTION } from '../utils/constant';
import { useDispatch } from 'react-redux';
function useNowPlayingMovie() {
    const dispatch=useDispatch();
    const getNowPlayingMovies=async()=>{
        const response=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTION)
        const json=await response.json()
        // console.log(json.results);
        dispatch(addNowPlayingMovie(json.results))
      }
      
      useEffect(()=>{
        getNowPlayingMovies()
      },[])
}

export default useNowPlayingMovie