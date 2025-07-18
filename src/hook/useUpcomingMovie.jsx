import  { useEffect} from 'react';
import {addUpcomingMovie} from '../utils/movieslice'
import { API_OPTION } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
function  useUpcomingMovie() {
    const dispatch=useDispatch();
    const upcoming=useSelector((store)=>store.movies.addUpcomingMovie)
    const getUpcomingMovie=async()=>{
        const response=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', 
        API_OPTION)
        const json=await response.json()
        dispatch(addUpcomingMovie(json.results))
      }
      useEffect(()=>{
        !upcoming && getUpcomingMovie()
      },[])
}

export default useUpcomingMovie