import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import detailReducer from "./detailReducer";

const allReducers = combineReducers({
  movies: movieReducer,
  detail: detailReducer,
});

export default allReducers;
