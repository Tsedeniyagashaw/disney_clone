import axios from "axios";

const movieBaseURL = "https://api.themoviedb.org/3";
const apiKey = import.meta.env.VITE_API_KEY;

const movieByGenereBaseURL ='https://api.themoviedb.org/3/discover/movie?api_key=' + apiKey + '&with_genres=';

const getTrendingVideos = () =>
  axios.get(`${movieBaseURL}/trending/all/day?api_key=${apiKey}`);
const getMovieByGenreId=(id) =>
  axios.get(movieByGenereBaseURL + id);

export default { getTrendingVideos,
  getMovieByGenreId
 };
