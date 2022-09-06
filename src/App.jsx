import Pagination from "./components/Pagination";
import useMoviesSearch from "./hooks/useMoviesSearch";

function App() {
  const { movies, page, totalPage, loading, setPage } = useMoviesSearch();
  console.log(loading);

  if (!movies) return;
  return (
    <div>
      <Pagination setPage={setPage} page={page} totalPage={totalPage} />
      {movies.map((movie) => (
        <p key={movie.id}>{movie.title}</p>
      ))}
    </div>
  );
}

export default App;
