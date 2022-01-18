const initialState = {
  movieList: [],
  category: "",
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MOVIE_LIST":
      return {
        ...state,
        movieList: action.payload,
      };
    case "SET_CATEGORY_NAME":
      return {
        category: action.payload,
      };
    default:
      return { ...state };
  }
};

export default movieReducer;
