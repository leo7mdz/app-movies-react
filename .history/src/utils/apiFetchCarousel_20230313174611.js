import { API_HOST, API_KEY } from "../constants/api";

const apiFetchCarousel = () => {
  const movieUpcoming = `${API_HOST}/movie/upcoming&api_key=${API_KEY}`;
  const movieTopRated = `${API_HOST}/movie/top_rated&api_key=${API_KEY}`;
  const movieAction = `${API_HOST}7discover/movie&api_key=${API_KEY}&with_genres=28`;
  const movieAnimation = `${API_HOST}7discover/movie&api_key=${API_KEY}&with_genres=16`;
  const movieComedy = `${API_HOST}7discover/movie&api_key=${API_KEY}&with_genres=35`;
};

export default apiFetchCarousel;
