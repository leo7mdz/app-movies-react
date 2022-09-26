import { useEffect, useReducer } from "react";
import moviesReducer, { MOVIES_INITIAL_STATE } from "../reducer/moviesReducer";
import MOVIES_ACTIONS from "../utils/movies-actions";
import apiFetch from "../utils/apiFetch";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "./useDebaunce";

const searchMovies = async (
  endpoint,
  search,
  page,
  startSearch,
  searchSuccess,
  searchError
) => {
  startSearch();

  const { success, data, statusCode } = await apiFetch(endpoint, search, page);

  if (success) {
    return searchSuccess(data.results, data.total_pages);
  }
  return searchError(`Error:${statusCode}`);
};

const useMoviesSearch = () => {
  const [moviesSearch, moviesDispatch] = useReducer(
    moviesReducer,
    MOVIES_INITIAL_STATE
  );

  const [query] = useSearchParams();
  const search = query.get("search");

  const debounce = useDebounce(search, 300);

  const endpoint = search ? "/search/movie" : `/movie/popular`;

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
      endpoint,
      debounce,
      moviesSearch.page,
      startSearch,
      searchSuccess,
      searchError
    );
  }, [moviesSearch.page, debounce]);

  return {
    ...moviesSearch,
    setPage,
  };
};

export default useMoviesSearch;
