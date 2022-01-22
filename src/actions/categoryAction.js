export const loadCategory = (category, movieCount) => async (dispatch) => {
  dispatch({
    type: "SET_CATEGORY",
    category: category,
    movieCount: movieCount,
  });
};
