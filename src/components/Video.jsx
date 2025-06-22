import { useSelector } from "react-redux";
import useVideoTrailer from "../hook/useVideoTrailer";

function Video({ movieid }) {
    const trailerId = useSelector((store) => store?.movies?.getVideoTrailer);
    useVideoTrailer(movieid);

    return (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <iframe
                className="aspect-video w-full -mt-[100px]" // shift video up by 100px
                src={
                    "https://www.youtube.com/embed/" +
                    trailerId?.key +
                    "?autoplay=1&mute=1&controls=0&rel=0&showinfo=0"
                }
                title="YouTube video player"
            ></iframe>
        </div>
    );
}

export default Video;
