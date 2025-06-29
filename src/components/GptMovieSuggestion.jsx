import React, { useRef } from 'react'
import lang from '../utils/languageConstant'
import { useDispatch, useSelector } from 'react-redux'
import useGptSearch from '../hook/useGptSearch';
import { addgptMovies } from '../utils/searchgptslice';

function GptMovieSuggestion() {
  const dispatch=useDispatch();
  const getLang = useSelector(store => store.app.lang)
  const SearchText = useRef();

  const handleGptSearch = () => {
    dispatch(addgptMovies({movieNames:null,movieResults:null}))
    const query=`You are a movie recommender assistant. Suggest movies based on the text you provided ${SearchText.current.value}. Give only the best 5 movies, with names comma separated like this: dhoom,ready,jalebi,don,chichore`
    useGptSearch(query,dispatch);
  };

  return (
    <div className='pt-[10%] '>
      <form
        className='w-1/2 grid grid-cols-12 bg-black mx-auto'
        onSubmit={(e) => e.preventDefault()}>
        <input
          className='outline-none col-span-9 m-2 px-4 py-2 border border-white text-black bg-white '
          type="text"
          ref={SearchText}
          placeholder={lang[getLang].gptPlaceholder} />

        <button
          onClick={handleGptSearch}
          className='cursor-pointer col-span-3 bg-red-600 text-white rounded-sm px-4 py-2 m-2'>
          {lang[getLang].search}
        </button>
      </form>
    </div>
  )
}

export default GptMovieSuggestion