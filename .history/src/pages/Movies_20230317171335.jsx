import CarouselTop from "../components/CarouselTop";
import GridCards from "../components/GridCards";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import { contextMovies } from "../context/MoviesContext";

const movies = ({ types }) => {
  const { movies, loading, error, setPage, totalPage, page } = contextMovies();
  console.log(movies);

  const moviePopular = `${API_HOST}/movie/popular?api_key=${API_KEY}`;

  if (!movies) return;
  return (
    <div className="container-page">
      <CarouselTop endpoint={moviePopular} />
      <h2 style={{ textAlign: "center" }}>Movies</h2>
      <Search />

      <Pagination page={page} totalPage={totalPage} setPage={setPage} />
      <GridCards types={types} data={movies} loading={loading} error={error} />
    </div>
  );
};

export default movies;
