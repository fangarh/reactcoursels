import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { theme } from "loft-taxi-mui-theme"; // Импортируем саму тему
import { MuiThemeProvider } from "@material-ui/core/styles";
import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "./Services/rootReducer";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { sagaListner } from "./Services/Sagas/sagas";
import { BrowserRouter } from "react-router-dom";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

// pick a date util library
import ruLocale from "date-fns/locale/ru";
import format from "date-fns/format";
import DateFnsUtils from "@date-io/date-fns";
import "react-datepicker/dist/react-datepicker.css";

const saga = createSagaMiddleware();

const appStore = createStore(
  rootReducer,
  compose(
    applyMiddleware(saga),

    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
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
