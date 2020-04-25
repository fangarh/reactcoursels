import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import DateFnsUtils from "@date-io/date-fns";
import format from "date-fns/format";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { rootReducer } from "./Services/StoreLogic/rootReducer";
import { sagaListner } from "./Services/ServerLogic/sagas";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import ruLocale from "date-fns/locale/ru";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { theme } from "loft-taxi-mui-theme";
import { MuiThemeProvider } from "@material-ui/core/styles";

import "./css/index.css";
import "react-datepicker/dist/react-datepicker.css";

const saga = createSagaMiddleware();

const appStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(saga))
);

saga.run(sagaListner);

class RuLocalizedUtils extends DateFnsUtils {
  getCalendarHeaderText(date) {
    return format(date, "LLLL", { locale: ruLocale });
  }

  getDatePickerHeaderText(date) {
    return format(date, "dd MMMM", { locale: ruLocale });
  }
}

const render = (
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <Provider store={appStore}>
        <BrowserRouter>
          <MuiPickersUtilsProvider utils={RuLocalizedUtils} locale={ruLocale}>
            <App />
          </MuiPickersUtilsProvider>
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
