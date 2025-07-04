import { API_OPTION, OPEN_AI} from "../utils/constant";
import { addgptMovies } from "../utils/searchgptslice";
async function SearchTmdbMovie(movie){
    const encoded = encodeURIComponent(movie);
    const data=await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encoded}&include_adult=false&language=en-US&page=1`,
        API_OPTION
      );
    const json=await data.json();
    return json.results;
}
async function useGptSearch(query,dispatch) {
    console.log('Movie data is loading...');
    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
        "Authorization":OPEN_AI,
          'HTTP-Referer': 'http://localhost:5173/browse',
          'X-Title': 'Movie Recommender',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'deepseek/deepseek-r1:free', 
          messages: [
            {
              role: 'user',
              content: query,
            },
          ],
        }),
      });
  
      let data = await response.json(); 
      data=data?.choices[0]?.message?.content.split(',')
      // console.log(data);
      //now for this movie array we will call our tmdb search api
      const PromiseArray=data.map((movie)=>SearchTmdbMovie(movie.trim()))
      const results = await Promise.all(PromiseArray); 
      console.log(results);
      dispatch(addgptMovies({movieNames:data,movieResults:results}))
      dispatch(setmovie(false))

    } catch (err) {
      console.error("GPT Fetch Error:", err);
      dispatch(setmovie(false))
      return null;
    }
  }
  
  export default useGptSearch;
  