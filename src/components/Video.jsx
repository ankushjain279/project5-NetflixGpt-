import React, { use, useEffect } from 'react'
import { API_OPTION } from '../utils/constant'
import {  useDispatch, useSelector } from 'react-redux';
import {addVideoTrailer} from '../utils/movieslice'
function Video({ movieid }) {

    const dispatch=useDispatch()
    const trailerId=useSelector((store)=>store?.movies?.getVideoTrailer)
    // console.log(trailerId?.key);
    const VideoPlay = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`, API_OPTION);
        const json = await response.json()
        //   console.log('Movie Data',json)

        const trailer = json.results.find(v => v.type === "Trailer") || json.results[0];
        // console.log(trailer);
        dispatch(addVideoTrailer(trailer))
    }
    useEffect(() => {
        VideoPlay()
    }, [])

    return (
        <div>
            <iframe
                src={"https://www.youtube.com/embed/" + trailerId?.key}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
            >
            </iframe></div>
    )
}

export default Video