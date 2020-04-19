import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { AuthProvider } from "./Components/Auth/AuthProvider";
import { theme } from "loft-taxi-mui-theme"; // Импортируем саму тему
import { MuiThemeProvider } from "@material-ui/core/styles";
import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "./Services/rootReducer";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { sagaListner } from "./Services/Sagas/sagas";

const saga = createSagaMiddleware();

const appStore = createStore(
  rootReducer,
  compose(
    applyMiddleware(saga),

    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

saga.run(sagaListner);

const render = (
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <AuthProvider>
        <Provider store={appStore}>
          <App />
        </Provider>
      </AuthProvider>
    </MuiThemeProvider>
  </React.StrictMode>
);

ReactDOM.render(render, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
