import { useEffect } from "react";
import { useReducer } from "react";
import { useSearchParams } from "react-router-dom";
import seriesReducer, { SERIES_INITIAL_STATE } from "../reducer/seriesReducer";
import apiFetch from "../utils/apiFetch";
import SERIES_ACTIONS from "../utils/series-action";
import { useDebounce } from "./useDebaunce";

const searchSeries = async (
  endpoint,
  search,
  page,
  startSearch,
  successSearch,
  errorSearch
) => {
  startSearch();
  const { data, success, statusCode } = await apiFetch(endpoint, search, page);

  if (success) {
    return successSearch(data.results, data.total_pages);
  }
  return errorSearch(`Error : ${statusCode}`);

  //console.log(data);
};

const useSeriesSearch = () => {
  const [seriesSearch, seriesDispatch] = useReducer(
    seriesReducer,
    SERIES_INITIAL_STATE
  );

  const [query] = useSearchParams();
  const search = query.get("search");

  const endpoint = search ? `/search/tv` : `/tv/popular`;

  const debounce = useDebounce(search, 300);

  const startSearch = () => {
    seriesDispatch({ type: SERIES_ACTIONS.START_SEARCH_SERIES });
  };

  const successSearch = (series, totalPage) => {
    seriesDispatch({
      type: SERIES_ACTIONS.SERIES_SEARCH_SUCCESS,
      series,
      totalPage,
    });
  };

  const errorSearch = (error) => {
    seriesDispatch({ type: SERIES_ACTIONS.SERIES_SEARCH_SUCCESS, error });
  };

  const setPage = (page) => {
    seriesDispatch({ type: SERIES_ACTIONS.SERIES_SETPAGE, page });
  };

  useEffect(() => {
    searchSeries(
      endpoint,
      debounce,
      seriesSearch.page,
      startSearch,
      successSearch,
      errorSearch
    );
  }, [seriesSearch.page, debounce]);

  return {
    ...seriesSearch,
    setPage,
  };
};

export default useSeriesSearch;
