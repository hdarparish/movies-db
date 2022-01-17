const initialState = {
  movieList: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MOVIE_LIST":
      return {
        ...state,
        movieList: action.payload,
      };
    default:
      return { ...state };
  }
};

export default movieReducer;
