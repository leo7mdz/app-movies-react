import { useEffect, useReducer } from "react";
import moviesReducer, { MOVIES_INITIAL_STATE } from "../reducer/moviesReducer";
import MOVIES_ACTIONS from "../utils/actions";
import apiFetch from "../utils/apiFetch";

const searchMovies = async (
  endpoint,
  page,
  startSearch,
  searchSuccess,
  searchError
) => {
  startSearch();

  const { success, data, statusCode } = await apiFetch(endpoint, page);

  if (success) {
    searchSuccess(data.results, data.total_pages);
  }

  searchError(`Error:${statusCode}`);
};

const useMoviesSearch = () => {
  const [moviesSearch, moviesDispatch] = useReducer(
    moviesReducer,
    MOVIES_INITIAL_STATE
  );

  const startSearch = () => {
    moviesDispatch({ type: MOVIES_ACTIONS.START_SEARCH });
  };

  const searchSuccess = (movies, totalPage) => {
    moviesDispatch({
      type: MOVIES_ACTIONS.MOVIES_SEARCH_SUCCESS,
      movies,
      totalPage,
    });
  };

  const searchError = (error) => {
    moviesDispatch({ type: MOVIES_ACTIONS.MOVIES_SEARCH_ERROR, error });
  };

  const setPage = (page) => {
    moviesDispatch({ type: MOVIES_ACTIONS.MOVIES_SETPAGE, page });
  };

  useEffect(() => {
    searchMovies(
      "/movie/popular",
      moviesSearch.page,
      startSearch,
      searchSuccess,
      searchError
    );
  }, [moviesSearch.page]);

  return {
    ...moviesSearch,
    setPage,
  };
};

export default useMoviesSearch;
