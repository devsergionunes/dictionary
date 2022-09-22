import { ThemeOptions } from "@mui/material";
import { Reducer } from "redux";

import { alterTheme } from "../../../styles/indexTheme";
import { UtilsTypes, UtilsState } from "./types";

const initialTheme =
  (localStorage.getItem("theme") as "light" | "dark") || "light";

const INITIAL_STATE: UtilsState = {
  loading: false,
  toast: {
    type: "info",
    message: "",
  },
  theme: {
    mode: initialTheme,
    object: alterTheme(initialTheme) as ThemeOptions,
  },
  device: "desktop",
};

const reducer: Reducer<UtilsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UtilsTypes.SET_LOADING:
      return { ...state, loading: action.payload };

    case UtilsTypes.SET_TOAST:
      return { ...state, toast: action.payload };

    case UtilsTypes.SET_THEME:
      localStorage.setItem("theme", action.payload);
      return {
        ...state,
        theme: {
          mode: action.payload,
          object: alterTheme(action.payload) as ThemeOptions,
        },
      };

    case UtilsTypes.DEVICE_TYPE:
      return { ...state, device: action.payload };

    default:
      return state;
  }
};

export default reducer;
