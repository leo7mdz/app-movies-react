import { useContext } from "react";
import { createContext } from "react";
import useMoviesSearch from "../hooks/useMoviesSearch";

const MoviesContext = createContext();

export const contextMovies = () => {
  return useContext(MoviesContext);
};

const MoviesProvider = ({ children }) => {
  const { movies, page, totalPage, loading, setPage, error } =
    useMoviesSearch();

  const data = {
    movies,
    page,
    totalPage,
    loading,
    setPage,
    error,
  };

  return (
    <MoviesContext.Provider value={data}>{children}</MoviesContext.Provider>
  );
};

export default MoviesProvider;
//export { MoviesContext };
