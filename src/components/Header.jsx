import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Header() {
  const dispatch=useDispatch()
  const navigate=useNavigate()

  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email,displayName} = user
        dispatch(addUser({ uid: uid, email: email , displayName: displayName}))
        navigate('/browse')
      } else {
        dispatch(removeUser())
        navigate('/')
      }
    })
    //when my component unmount
    return ()=>unsubscribe()
  }, [])

  return (
    <div className='w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
        <img className='w-44' src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt="" />
    </div>
  )
}

export default Header