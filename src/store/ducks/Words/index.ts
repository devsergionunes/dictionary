import { Reducer } from "redux";

import { WordsState, WordsTypes } from "./types";

const INITIAL_STATE: WordsState = {
  menuSelected: 0,
  wordData: {
    id: "",
    ind_favorite: false,
    word: "",
    phonetic: "",
    phonetics: [],
  },
  wordsList: [],
  favoriteList: [],
  historyList: [],
};

const reducer: Reducer<WordsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WordsTypes.SET_WORD:
      return { ...state, wordData: action.payload };

    case WordsTypes.SET_WORDS_LIST:
      return { ...state, wordsList: action.payload };

    case WordsTypes.SET_WORD_FAVORITE:
      return { ...state, favoriteList: action.payload };

    case WordsTypes.SET_WORD_HISTORY:
      return { ...state, historyList: action.payload };

    case WordsTypes.SET_MENU_SELECTED:
      return { ...state, menuSelected: action.payload };

    default:
      return state;
  }
};

export default reducer;
