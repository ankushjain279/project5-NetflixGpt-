import React from 'react'
import {IMG_CDN_URL} from '../utils/constant'
function MovieCard({posterpath}) {
  if(!posterpath)return null;
  return (
    <div className="w-[150px] min-w-[150px] m-6">
        <img 
        className="w-full  object-auto shadow-md"
        src={IMG_CDN_URL +posterpath} alt="" />
    </div>
  )
}

export default MovieCard