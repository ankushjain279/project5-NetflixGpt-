
import Header from './Header';
import useNowPlayingMovie from '../hook/useNowPlayingMovie';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovie from '../hook/usePopularMoive';
import useTopRated from '../hook/useTopRated'
import useUpcomingMovie from '../hook/useUpcomingMovie';
import SearchGpt from './SearchGpt';
import { useSelector } from 'react-redux';
function Browse() {
  useNowPlayingMovie()
  usePopularMovie()
  useTopRated()
  useUpcomingMovie()
  const showGpt=useSelector(store=>store.gpt.toggleSearch)
  // console.log(showGpt);
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
        {
        showGpt ?  <SearchGpt/>:
        <><MainContainer/>
        <SecondaryContainer/>
        </>
        }
        
    </>
  );
}

export default Browse;