import React, { useEffect} from 'react';
import {addPopularMovie} from '../utils/movieslice'
import { API_OPTION } from '../utils/constant';
import { useDispatch } from 'react-redux';
function  usePopularMovie() {
    const dispatch=useDispatch();
    const getPopularMovie=async()=>{
        const response=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTION)
        const json=await response.json()
        // console.log(json.results);
        dispatch(addPopularMovie(json.results))
      }
      
      useEffect(()=>{
        getPopularMovie()
      },[])
}

export default usePopularMovie