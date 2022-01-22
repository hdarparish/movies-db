const initialState = {
  movieList: [],
  searched: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      return {
        ...state,
        movieList: action.payload,
      };
    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload,
      };
    case "CLEAR_SEARCHED":
      return {
        ...state,
        searched: [],
      };
    default:
      return { ...state };
  }
};

export default movieReducer;
