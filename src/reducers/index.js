import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import detailReducer from "./detailReducer";
import categoryReducer from "./categoryReducer";

const allReducers = combineReducers({
  movies: movieReducer,
  detail: detailReducer,
  category: categoryReducer,
});

export default allReducers;
