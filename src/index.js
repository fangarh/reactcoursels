import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { appStore } from "./Services/StoreLogic/rootReducer";

import { theme } from "loft-taxi-mui-theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import LocalesProvider1 from "./Services/Localization/LocalesProvider";

import "./css/index.css";
import "react-datepicker/dist/react-datepicker.css";

const render = (
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <Provider store={appStore}>
        <BrowserRouter>
          <LocalesProvider1>
            <App />
          </LocalesProvider1>
        </BrowserRouter>
      </Provider>
    </MuiThemeProvider>
  </React.StrictMode>
);

ReactDOM.render(render, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
