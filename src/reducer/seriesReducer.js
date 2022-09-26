import SERIES_ACTIONS from "../utils/series-action";

const SERIES_INITIAL_STATE = {
  series: undefined,
  loading: false,
  error: null,
  page: 1,
  totalPage: 1,
};

const seriesReducer = (state, action) => {
  switch (action.type) {
    case SERIES_ACTIONS.START_SEARCH_SERIES: {
      return {
        ...state,
        loading: true,
      };
    }
    case SERIES_ACTIONS.SERIES_SEARCH_SUCCESS: {
      return {
        ...state,
        series: action.series,
        loading: false,
        totalPage: action.totalPage,
      };
    }
    case SERIES_ACTIONS.SERIES_SEARCH_ERROR: {
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    }
    case SERIES_ACTIONS.SERIES_SETPAGE: {
      return {
        ...state,
        page: action.page,
      };
    }
    default:
      return state;
  }
};

export { SERIES_INITIAL_STATE };
export default seriesReducer;
