import axios from "axios";

export const loadGenre = (genre) => async (dispatch) => {
  const movieList = await axios.get(
    `${process.env.REACT_APP_API_URL}genre?genre=${genre}`
  );

  dispatch({
    type: "FETCH_MOVIE_LIST",
    payload: movieList.data,
  });
};

export const loadTopMovies = () => async (dispatch) => {
  const movieList = await axios.get(process.env.REACT_APP_API_URL);

  dispatch({
    type: "FETCH_MOVIE_LIST",
    payload: movieList.data,
  });
};
