import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
import Shimmer from './Shimmer'

function GptSearchBar() {
  const { gptMovies, gptMoviesName } = useSelector((store) => store.gpt);
  const showMovie=useSelector((store)=>store.app.showMovie)
  

  if(!gptMovies ) return showMovie && <Shimmer/>;
  return (
    <div className='p-4 m-4 bg-black/70'>
      {/* <h1 className='text-5xl text-white'>Movies </h1> */}
      {
        gptMoviesName.map((movie,i)=>{
          return <MovieList key={movie} movies={gptMovies[i]} title={movie.toUpperCase()}/>
        })
      }
    </div>
  )
}

export default GptSearchBar