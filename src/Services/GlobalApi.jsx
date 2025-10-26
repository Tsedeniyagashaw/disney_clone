import axios from "axios";

const movieBaseURL = "https://api.themoviedb.org/3";
const apiKey = import.meta.env.VITE_API_KEY;

const getTrendingVideos = () =>
  axios.get(`${movieBaseURL}/trending/all/day?api_key=${apiKey}`);

export default { getTrendingVideos };
