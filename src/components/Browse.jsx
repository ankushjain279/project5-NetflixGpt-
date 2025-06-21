import React, { useState } from 'react';
import Header from './Header';
import hackerImg from '../assets/hacker.png';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import useNowPlayingMovie from '../hook/useNowPlayingMovie';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

function Browse() {

  const [showSignOut, setShowSignOut] = useState(false);
  const toggleSignOut = () => {
    setShowSignOut(!showSignOut);
  };
  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
    });
  }
  
  useNowPlayingMovie()
  return (
    <>
      <div className="min-h-screen text-white relative">
      <Header />
    
      {/* Profile Section */}
      <div className="flex justify-end items-center p-6 space-x-3 relative z-10">
        {/* Clickable Avatar */}
        <button onClick={toggleSignOut} className="focus:outline-none">
          <img
            src={hackerImg}
            alt="Profile"
            className="w-12 h-12 rounded-full border-2 border-white hover:scale-110 transition-transform duration-200 cursor-pointer"
          />
        </button>

        {/* Dropdown */}
        {showSignOut && (
          <div className="absolute top-20 right-6 bg-white text-black rounded-md shadow-lg py-2 w-36 z-20">
            <ul className="flex flex-col text-sm font-medium">
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded"
                onClick={handleSignOut}
              >
                Sign Out
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded"
                y
              >
                Profile
              </li>
            </ul>
          </div>
        )}
      </div>
      </div>
      {/* 
       Main container
        -movie video
        -movie title

       Secondary Container
        -movie list*n  
      */}
      <div >
        <MainContainer/>
        <SecondaryContainer/>
      </div>
    </>
  );
}

export default Browse;
