import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import RootRoute from "./Routes/RootRoute";
import * as serviceWorker from "./serviceWorker";
import rootReducer from "./store/reducers/RootReducer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";

// setting up devtools

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(ReduxThunk))
);

const MainApp = (
  <Provider store={store}>
    <RootRoute />
  </Provider>
);

ReactDOM.render(MainApp, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
