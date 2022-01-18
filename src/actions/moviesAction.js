import axios from "axios";

export const loadGenre =
  (category = "Top", pageNumber = 0) =>
  async (dispatch) => {
    let movieList;
    if (category === "Top") {
      movieList = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}`,
        params: { page: pageNumber },
      });
    } else {
      movieList = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}category`,
        params: { category: category, page: pageNumber },
      });
    }

    dispatch({
      type: "FETCH_MOVIE_LIST",
      payload: movieList.data,
    });
  };

export const loadMovies = (category) => async (dispatch) => {
  dispatch({
    type: "SET_CATEGORY_NAME",
    payload: category,
  });
};

export const loadQuery = (query, cancelToken) => async (dispatch) => {
  console.log(query);
  try {
    const movieList = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}search`,
      params: { query: query },
      cancelToken,
    });
    console.log(movieList);

    dispatch({
      type: "FETCH_MOVIE_LIST",
      payload: movieList.data,
    });
  } catch (err) {
    if (axios.isCancel(err)) return;
  }
};
