import MOVIES_ACTIONS from "../utils/actions";

const MOVIES_INITIAL_STATE = {
  movies: "",
  loading: false,
  error: undefined,
  page: 1,
  totalPages: 1,
};

const moviesReducer = (state, action) => {
  switch (action.type) {
    case MOVIES_ACTIONS.START_SEARCH: {
      return {
        ...state,
        loading: true,
      };
    }
    case MOVIES_ACTIONS.MOVIES_SEARCH_SUCCESS: {
      return {
        ...state,
        movies: action.movies,
        loading: false,
        totalPage: action.totalPage,
      };
    }
    case MOVIES_ACTIONS.MOVIES_SEARCH_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    case MOVIES_ACTIONS.MOVIES_SETPAGE: {
      return {
        ...state,
        page: action.page,
      };
    }
    default:
      return state;
  }
};

export { MOVIES_INITIAL_STATE };
export default moviesReducer;
