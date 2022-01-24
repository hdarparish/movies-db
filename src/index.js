import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//Redux
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import allReducers from "./reducers/index";

import { BrowserRouter } from "react-router-dom";

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//store
const store = createStore(
  allReducers,
  composeEnchancer(applyMiddleware(thunk))
);

ReactDOM.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </>,
  document.getElementById("root")
);
