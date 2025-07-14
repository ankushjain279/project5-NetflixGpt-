import React from 'react';
import { useSelector } from 'react-redux';
import { IMG_CDN_URL } from '../utils/constant';

function OnclickMovieDescription() {
  const getMovie = useSelector((store) => store.movies.getCurrentMovie);

  if (!getMovie) return null;

  return (
    <div className="relative min-h-screen bg-black text-white flex items-center justify-center px-4 py-12">

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row gap-8 bg-[#1a1a1a]/90 rounded-3xl shadow-xl overflow-hidden backdrop-blur-md border border-gray-700 mt-14">
        
        {/* Movie Poster */}
        <div className="w-full md:w-1/3">
          <img
            src={IMG_CDN_URL + getMovie.image}
            alt={getMovie.name}
            className="w-full h-full object-cover rounded-l-3xl md:rounded-l-3xl shadow-md"
          />
        </div>

        {/* Movie Details */}
        <div className="w-full flex flex-col justify-center p-6 md:p-10 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 leading-tight">
            {getMovie.name}
          </h1>

          {/* Movie Meta Info */}
          <div className="text-gray-400 space-y-1 text-sm">
            <p>
              <span className="text-white font-medium">Release Date:</span> {getMovie.release_date}
            </p>
            
          </div>

          {/* Description */}
          <p className="text-gray-200 text-base leading-relaxed max-w-2xl">
            {getMovie.overview}
          </p>

          {/* Watch Now Button */}
          <div>
            <button className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition-colors duration-200 shadow-md cursor-pointer">
              ▶ Watch Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnclickMovieDescription;
