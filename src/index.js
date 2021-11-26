import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./reducers";
import { getUsers } from "./actions/users.actions";
import { getPosts } from "./actions/post.action";

// dev tools
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

store.dispatch(getUsers());
store.dispatch(getPosts());

console.log(process.env.REACT_APP_API_URL);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
