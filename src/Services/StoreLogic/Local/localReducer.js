import { setCurLocal, nextLocal } from "./";
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

const getLocaleName = (localeName) => {
  switch (localeName) {
    case "en-US":
      return "РУ";
    case "ru":
      return "EN";
    default:
      return "EN";
  }
};

export const initialState = {
  curLocal: local,
  nextLocaleName: getLocaleName(local),
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
        nextLocaleName: getLocaleName(local),
        localeMessages: getMessages(action.payload),
        fnsLocale: getFnsLocale(action.payload),
      };
    case nextLocal.toString():
      console.log(state);
      let oldLocal = state.curLocal;
      let newLocal = "";

      if (oldLocal === "ru") newLocal = "en-US";
      else newLocal = "ru";

      return {
        ...state,
        curLocal: newLocal,
        nextLocaleName: getLocaleName(newLocal),
        localeMessages: getMessages(newLocal),
        fnsLocale: getFnsLocale(newLocal),
      };

    default:
      return state;
  }
};
