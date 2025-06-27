import React from 'react'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux'

function GptMovieSuggestion() {
    const getLang=useSelector(store=>store.app.lang)
    // console.log(getLang);
  return (
    <div className='pt-[10%] '>
        <form className='w-1/2 grid grid-cols-12 bg-black mx-auto' action="">
            <input 
            className='col-span-9 m-2 px-4 py-2 border border-white text-black bg-white ' type="text" 
            placeholder={lang[getLang].gptPlaceholder}/>
            
            <button 
            className='col-span-3 bg-red-600 text-white rounded-sm px-4 py-2 m-2'>
            {lang[getLang].search}
            </button>
        </form>
    </div>
  )
}

export default GptMovieSuggestion