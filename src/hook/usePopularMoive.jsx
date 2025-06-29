import React, { useEffect} from 'react';
import {addPopularMovie} from '../utils/movieslice'
import { API_OPTION } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
function  usePopularMovie() {
    const dispatch=useDispatch();
    const popular=useSelector((store)=>store.movies.addPopularMovie)
    const getPopularMovie=async()=>{
        const response=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTION)
        const json=await response.json()
        // console.log(json.results);
        dispatch(addPopularMovie(json.results))
      }
      
      useEffect(()=>{
      !popular &&getPopularMovie()
      },[])
}

export default usePopularMovie