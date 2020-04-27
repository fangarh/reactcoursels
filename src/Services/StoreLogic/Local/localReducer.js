import { setCurLocal } from "./";
import ruLocale from "date-fns/locale/ru";
import enLocale from "date-fns/locale/en-US";

import ru from "../../../Languages/ru-RU.json";
import en from "../../../Languages/en-US.json";

let local = "en-US";

if (localStorage.curLocal) {
  local = localStorage.curLocal;
}

const getFnsLocale = (localeName) => {
  switch (localeName) {
    case "en-US":
      return enLocale;
    case "ru":
      return ruLocale;
    default:
      return ruLocale;
  }
};

const getMessages = (localeName) => {
  switch (localeName) {
    case "en-US":
      return en;
    case "ru":
      return ru;
    default:
      return ru;
  }
};

export const initialState = {
  curLocal: local,
  fnsLocale: getFnsLocale(local),
  localeMessages: getMessages(local),
};

export const localReducer = (state = initialState, action) => {
  switch (action.type) {
    case setCurLocal.toString():
      localStorage.curLocal = action.payload;

      return {
        ...state,
        curLocal: action.payload,
        localeMessages: getMessages(action.payload),
        fnsLocale: getFnsLocale(action.payload),
      };
    default:
      return state;
  }
};
