/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useLayoutEffect } from "react";

import { api } from "../services/api";
import { getItem, setItem, WORD_HISTORY } from "../services/localStorage";
import { setToastMessage } from "../store/ducks/Utils/actions";
import {
  setWordDataAction,
  setWordsFavoriteAction,
  setWordsHistoryAction,
  setWordsListAction,
} from "../store/ducks/Words/actions";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export const useWordActions = () => {
  const { wordsList, wordData } = useAppSelector(({ Words }) => Words);
  const dispatch = useAppDispatch();

  const addWordUrlQuery = (word: string) => {
    window.history.pushState(null, "", `?word=${word}`);
  };

  const getWordData = async (word: string) => {
    try {
      const cachWords = getItem(WORD_HISTORY);
      const listCach = cachWords || [];
      const wordCach = listCach.find((item: any) => item.word === word);

      if (wordCach) {
        dispatch(setWordDataAction(wordCach));
        addWordUrlQuery(word);
        return;
      }
      const { data } = await api.get(`/words/?word=${word || ""}`);
      dispatch(setWordDataAction(data));
      const newListCache = [...listCach, data];
      dispatch(setWordsHistoryAction(newListCache));
      setItem(WORD_HISTORY, newListCache);
      addWordUrlQuery(word);
    } catch (error: any) {
      dispatch(setWordDataAction({} as any));
      const { message } = error.response.data;
      dispatch(
        setToastMessage({
          type: "error",
          message,
        })
      );
    }
  };

  const getWordsList = async (offset?: number, limit?: number) => {
    try {
      const { data } = await api.get(
        `/words/all?offset=${offset || ""}&limit=${limit || ""}`
      );
      console.log(offset);
      console.log(data);
      if (offset) {
        dispatch(setWordsListAction([...wordsList, ...data]));
      } else dispatch(setWordsListAction(data));
    } catch (error: any) {
      const { message } = error.response.data;
      dispatch(
        setToastMessage({
          type: "error",
          message,
        })
      );
    }
  };

  const getWordsListHistory = () => {
    const wordsListHistory = getItem(WORD_HISTORY);
    if (wordsListHistory?.length) {
      dispatch(setWordsHistoryAction(wordsListHistory));
    }
  };

  const getWordsFavorite = async (offset?: number, limit?: number) => {
    try {
      const { data } = await api.get(
        `/words/favorite?offset=${offset || ""}&limit=${limit || ""}`
      );
      dispatch(setWordsFavoriteAction(data));
    } catch (error: any) {
      const { message } = error.response.data;
      dispatch(
        setToastMessage({
          type: "error",
          message,
        })
      );
    }
  };

  const updtaeWordCache = (id: string) => {
    const wordsListHistory = getItem(WORD_HISTORY);
    const newList = wordsListHistory.map((item: any) => {
      if (item.id === id) {
        return {
          ...item,
          ind_favorite: !item.ind_favorite,
        };
      }
      return item;
    });
    if (wordData.id === id) {
      dispatch(
        setWordDataAction({ ...wordData, ind_favorite: !wordData.ind_favorite })
      );
    }
    dispatch(setWordsHistoryAction(newList));
    setItem(WORD_HISTORY, newList);
    getWordsListHistory();
  };

  const addWordsFavorite = async (id: number) => {
    try {
      await api.post(`/words/favorite/${id}`);
      const newWordList = wordsList.map((word) => {
        if (Number(word.id) === id) {
          updtaeWordCache(word.id);
          return {
            ...word,
            ind_favorite: true,
          };
        }
        return word;
      });
      getWordsFavorite();
      dispatch(setWordsListAction(newWordList));
    } catch (error: any) {
      const { message } = error.response.data;
      dispatch(
        setToastMessage({
          type: "error",
          message,
        })
      );
    }
  };

  const removeWordsFavorite = async (id: number) => {
    try {
      await api.delete(`/words/favorite/${id}`);
      const newWordList = wordsList.map((word) => {
        if (Number(word.id) === id) {
          updtaeWordCache(word.id);
          return {
            ...word,
            ind_favorite: false,
          };
        }
        return word;
      });
      getWordsFavorite();
      dispatch(setWordsListAction(newWordList));
    } catch (error: any) {
      const { message } = error.response.data;
      dispatch(
        setToastMessage({
          type: "error",
          message,
        })
      );
    }
  };

  useEffect(() => {
    if (!wordsList.length) {
      getWordsList();
      getWordsListHistory();
      getWordsFavorite();
    }
  }, []);

  useLayoutEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const word = urlParams.get("word");
    if (word) {
      getWordData(word);
    }
  }, []);

  return {
    getWordData,
    getWordsList,
    getWordsFavorite,
    removeWordsFavorite,
    addWordsFavorite,
    getWordsListHistory,
  };
};
