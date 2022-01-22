const initialState = {
  category: "",
  movieCount: 0,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return {
        ...state,
        category: action.category,
        movieCount: action.movieCount,
      };
    default:
      return { ...state };
  }
};

export default categoryReducer;
