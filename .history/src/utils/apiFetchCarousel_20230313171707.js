import { API_HOST, API_KEY } from "../constants/api";

const apiFetchCarousel = () => {
  const movieUpcoming = `${API_HOST}/movie/upcoming&api_key=${API_KEY}`;
};

export default apiFetchCarousel;
