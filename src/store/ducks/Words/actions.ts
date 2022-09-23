import { action } from "typesafe-actions";

import { WordsTypes, WordProps, WordDataProps } from "./types";

type Params = {
  offset?: number;
  limit?: number;
};

export const setWordDataAction = (data: WordDataProps) =>
  action(WordsTypes.SET_WORD, data);

export const setWordsListAction = (data: WordProps[]) =>
  action(WordsTypes.SET_WORDS_LIST, data);

export const setWordsFavoriteAction = (data: WordProps[]) =>
  action(WordsTypes.SET_WORD_FAVORITE, data);

export const getWordsListAction = (data: Params) =>
  action(WordsTypes.GET_WORDS_LIST, data);

export const getWordsFavoriteAction = (data: Params) =>
  action(WordsTypes.GET_WORDS_FAVORITE, data);

export const setWordsHistoryAction = (data: WordProps[]) =>
  action(WordsTypes.SET_WORD_HISTORY, data);

export const setMenuSelectedAction = (menu: number) =>
  action(WordsTypes.SET_MENU_SELECTED, menu);
