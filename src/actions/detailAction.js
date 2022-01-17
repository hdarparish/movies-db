import axios from "axios";

export const loadDetail = (movieID) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });

  const movieData = await axios.get(
    `${process.env.REACT_APP_API_URL}movie/${movieID}`
  );

  dispatch({
    type: "GET_DETAIL",
    payload: {
      movieDetail: movieData.data,
    },
  });
};
