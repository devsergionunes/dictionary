/**
 * Action types
 */
export enum WordsTypes {
  SET_WORD = "@word/SET_WORD",
  GET_WORD = "@word/GET_WORD",
  SET_WORDS_LIST = "@word/SET_WORDS",
  GET_WORDS_LIST = "@word/GET_WORDS",
  SET_WORD_FAVORITE = "@word/SET_WORD_FAVORITE",
  GET_WORDS_FAVORITE = "@word/GET_WORDS_FAVORITE",
  SET_WORD_HISTORY = "@word/SET_WORD_HISTORY",
  GET_WORDS_HISTORY = "@word/GET_WORDS_HISTORY",
  SET_MENU_SELECTED = "@word/SET_MENU_SELECTED",
}

/**
 * valores isolados do objeto de parametros
 */
export type WordProps = {
  id: string;
  word: string;
  ind_favorite: boolean;
};

export type WordDataProps = WordProps & {
  phonetic?: string;
  phonetics?: Array<{
    text: string;
    audio: string;
  }>;
  meanings?: Array<{
    partOfSpeech: string;
    definitions: Array<{
      definition: string[];
      partOfSpeech: string;
      synonyms: string[];
    }>;
  }>;
};
/**
 * valores do state completo desse redux
 */
export type WordsState = {
  readonly wordData: WordDataProps;
  readonly wordsList: WordProps[];
  readonly favoriteList: WordProps[];
  readonly historyList: WordDataProps[];
  readonly menuSelected: 0 | 1 | 2;
};
