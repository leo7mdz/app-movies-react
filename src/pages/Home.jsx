import { useContext } from "react";
import GridCards from "../components/GridCards";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import { contextMovies } from "../context/MoviesContext";

const Home = ({ types }) => {
  const { movies, loading, error, setPage, totalPage, page } = contextMovies();
  console.log(movies);

  if (!movies) return;
  return (
    <div>
      <h2>Movies</h2>
      <Search />
      <Pagination page={page} totalPage={totalPage} setPage={setPage} />
      <GridCards types={types} data={movies} loading={loading} error={error} />
    </div>
  );
};

export default Home;
