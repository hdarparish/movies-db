const initialState = {
  movieDetail: {},
};

const detailReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        movieDetail: action.payload.movieDetail,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
