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
      return;
    }
    case MOVIES_ACTIONS.MOVIES_SEARCH_SUCCESS: {
      return;
    }
    case MOVIES_ACTIONS.MOVIES_SEARCH_ERROR: {
      return;
    }
    default:
      return state;
  }
};

export { MOVIES_INITIAL_STATE };
export default moviesReducer;
