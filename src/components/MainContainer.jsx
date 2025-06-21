import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import Video from './Video'

function MainContainer() {
    const movies=useSelector((store)=>store.movies?.getNowPlayingMovie)
    
    if(!movies)return
    //Selecting one Random movie video from the movies array   
    const mainmovie = movies[Math.floor(Math.random() * movies.length)];
    // console.log(mainmovie.id)
    // console.log(mainmovie)
    // console.log(mainmovie.original_title)

    return (
    <>
    <VideoTitle title={mainmovie.original_title} overview={mainmovie.
    overview}/>
    <Video movieid={mainmovie.id}/>
    </>
  )
}

export default MainContainer