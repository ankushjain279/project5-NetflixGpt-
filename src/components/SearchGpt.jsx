import React from 'react'
import GptMovieSuggestion from './GptMovieSuggestion'
import GptSearchBar from './GptSearchBar'
import { BODY } from '../utils/constant'
function SearchGpt() {
  return (
    <>
    <div className='-z-10 fixed'>
    <img src={BODY} alt="" />
    </div>
    <GptMovieSuggestion/>
    <GptSearchBar/>
    </>
  ) 
}

export default SearchGpt 