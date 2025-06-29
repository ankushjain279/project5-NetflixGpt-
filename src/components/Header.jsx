import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useRef, useState } from 'react'
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import hackerImg from '../assets/hacker.png';
import { signOut } from "firebase/auth";
import { addtoggleBtnSearch } from '../utils/searchgptslice'
import { SUPPORTED_LANGUAGE } from '../utils/constant';
import { setLang } from '../utils/appConfigSlice';
function Header() {
  const lang = useRef()
  const [showSignOut, setShowSignOut] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const setgpt = useSelector(store => store.gpt.toggleSearch)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
        navigate('/browse')
      } else {
        dispatch(removeUser())
        navigate('/')
      }
    })
    //when my component unmount
    return () => unsubscribe()
  }, [])

  const toggleSignOut = () => {
    setShowSignOut(!showSignOut);
  };

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
    });
  }

  const handleSearchGpt = () => {
    dispatch(addtoggleBtnSearch())
  }

  const handleLanguageChange = () => {
    dispatch(setLang(lang.current.value))
    // console.log(lang.current.value);
  }
  return (
    <div className='w-full flex justify-between fixed top-0 px-8 py-bg-gradient-to-b from-black/80 z-100'>
      <img className='w-48 hover:opacity-90 transition-opacity duration-200' src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt="" />



      {/* Profile Section */}
      {auth.currentUser
        &&
        <div className="flex justify-end items-center gap-6">

          {/* language translater */}

          {setgpt &&
            <select
              ref={lang}
              onChange={handleLanguageChange}
              className='bg-gray-900 px-4 py-2 text-white'>
              {
                SUPPORTED_LANGUAGE.map((lang) => {
                  return <option value={lang.identifier} key={lang.identifier} >{lang.name}</option>
                })
              }
            </select>}

          {/* search gpt button */}
          <div>
            <button onClick={handleSearchGpt}
              className='bg-purple-300 text-white rounded-lg px-4 py-2 mt-2 cursor-pointer'>
              {setgpt?'Homepage':'SearchGpt'}</button>
          </div>

          <div>
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
              <div className="absolute top-20 right-6 bg-white text-black rounded-lg shadow-xl py-2 w-40 z-20">
                <ul className="flex flex-col text-sm font-medium">
                  <li
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer rounded"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer rounded"
                    y
                  >
                    Profile
                  </li>
                </ul>
              </div>
            )}
          </div>



        </div>
      }
    </div>
  )
}

export default Header