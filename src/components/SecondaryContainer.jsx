import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
function SecondaryContainer() {
  const movies=useSelector(store=>store.movies)
  return (
    <div className='bg-black'>
        {/* movielist-popular
              moviecards*n
            movielist-trending
              moviecards*n
        */}
      <div >
      <MovieList movies={movies.getNowPlayingMovie} title={'Now Playing'}/>
      <MovieList movies={movies.getTopRated} title={'Top Rated'}/>
      <MovieList movies={movies.getPopularMovie} title={'Popular'}/>
      <MovieList movies={movies.getNowPlayingMovie} title={'UpComing'}/>
      <MovieList movies={movies.getNowPlayingMovie} title={'Most Watched'}/>
      </div>  
    </div>
  )
}

export default SecondaryContainer