
import Header from './Header';
import useNowPlayingMovie from '../hook/useNowPlayingMovie';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovie from '../hook/usePopularMoive';
import useTopRated from '../hook/useTopRated'
function Browse() {
  useNowPlayingMovie()
  usePopularMovie()
  useTopRated()
  return (
    <>
    {/* //   <div className="min-h-screen text-white relative bg-gradient-to-b from-gray-900"> */}
      <Header />
      {/* 
       Main container
        -movie video
        -movie title

       Secondary Container
        -movie list*n  
      */}
        <MainContainer/>
        <SecondaryContainer/>
    </>
  );
}

export default Browse;