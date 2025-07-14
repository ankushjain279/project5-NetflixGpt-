import React from 'react'
import MovieCard from './MovieCard';

function MovieList({movies,title}) {
  // console.log('movielist',movies);
 
  return (  
    <div>
        <h2 className='font-bold text-white  ml-6 text-3xl hover:underline w-2/10'>{title}</h2>
        <div className="flex overflow-x-scroll pb-4 scrollbar-hide">
            {
                movies?.map((movie)=>{
                return < MovieCard
                key={movie.id}
                posterpath={movie.poster_path}
                name={movie.original_title}
                overview={movie.overview}
                release_date={movie.release_date}/>
                })
            }
        </div>
    </div>
  )
}

export default MovieList