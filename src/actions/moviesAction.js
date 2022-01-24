import axios from "axios";

export const loadMovies =
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
      type: "FETCH_MOVIES",
      payload: movieList.data,
    });
  };

export const loadQuery =
  (query, pageNumber = 0) =>
  async (dispatch) => {
    try {
      const movieList = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}search`,
        params: { query: query, page: pageNumber },
      });

      dispatch({
        type: "FETCH_SEARCHED",
        payload: movieList.data,
      });
    } catch (err) {
      if (axios.isCancel(err)) return;
    }
  };
