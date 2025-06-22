import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addVideoTrailer } from "../utils/movieslice";
import { useEffect } from "react";


function useVideoTrailer(movieid) {
    const dispatch=useDispatch()
    
    const VideoPlay = async () => {
    
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`, API_OPTION);
        const json = await response.json()
        const trailer = json.results.find(v => v.type === "Trailer") || json.results[0];
        dispatch(addVideoTrailer(trailer))
    }
    useEffect(() => {
        VideoPlay()
    }, [])
}

export default useVideoTrailer