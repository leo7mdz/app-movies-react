import useMoviesSearch from "./hooks/useMoviesSearch";

function App() {
  const { movies, page, totalPage, loading } = useMoviesSearch();
  console.log(movies, page, totalPage, loading);

  if (!movies) return;
  return (
    <div>
      {movies.map((movie) => (
        <p key={movie.id}>{movie.title}</p>
      ))}

      <p>
        Pagina <b>{page}</b> de <b>{totalPage}</b>
      </p>
    </div>
  );
}

export default App;
