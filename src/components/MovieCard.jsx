import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'
import { useDispatch } from 'react-redux';
import { addCurrentMovie, addMovieDescription } from '../utils/movieslice';
function MovieCard({ posterpath,name,overview,release_date}) {
  const dispatch=useDispatch();

  if (!posterpath) return null;
  const handleOnclick = () => {
    dispatch(addMovieDescription())
    dispatch(addCurrentMovie({
      name:name,
      image:posterpath,
      overview:overview,
      release_date:release_date
    }))
   
  }
  return (
    <div className="w-[150px] min-w-[150px] m-6 ">
      <img
        onClick={handleOnclick}
        className="w-full cursor-pointer object-auto shadow-md"
        src={IMG_CDN_URL + posterpath} alt="" />
    </div>

  )
}

export default MovieCard