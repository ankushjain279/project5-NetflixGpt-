import React, { useEffect} from 'react';
import {addTopRated} from '../utils/movieslice'
import { API_OPTION } from '../utils/constant';
import { useDispatch } from 'react-redux';
function  useTopRated() {
    const dispatch=useDispatch();
    const getTopRated=async()=>{
        const response=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
        API_OPTION)
        const json=await response.json()
        // console.log(json.results);
        dispatch(addTopRated(json.results))
      }
      
      useEffect(()=>{
        getTopRated()
      },[])
}

export default useTopRated