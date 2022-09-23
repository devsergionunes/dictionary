/* eslint-disable func-names */
/* eslint-disable @typescript-eslint/no-explicit-any */
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HistoryIcon from "@mui/icons-material/History";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import { IconButton, Tooltip } from "@mui/material";
import { useRef, useState } from "react";

import { useWordActions } from "../../hooks/useWordActions";
import { setMenuSelectedAction } from "../../store/ducks/Words/actions";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { debounce } from "../../Utils/utils";
import * as T from "../base/Text";
import { DrawerWordDetails } from "../DrawerWordDetails";
import * as S from "./styles";

export function WordList() {
  const wordListRef = useRef<HTMLDivElement>(null);
  const [openDrawerDetails, setOpenDrawerDetails] = useState(false);

  const {
    Words,
    Utils: { device },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const { wordsList, favoriteList, historyList, wordData, menuSelected } =
    Words;
  const menusListHeader = [
    {
      Icon: TextSnippetIcon,
      title: "Words",
    },
    {
      Icon: FavoriteIcon,
      title: "Favorites",
    },
    {
      Icon: HistoryIcon,
      title: "Historic",
    },
  ];

  const {
    getWordData,
    addWordsFavorite,
    removeWordsFavorite,
    getWordsList,
    getWordsFavorite,
  } = useWordActions();

  const setWordDetails = (word: string) => {
    console.log(device);
    if (device === "mobile") {
      setOpenDrawerDetails(true);
    }
    getWordData(word);
  };

  const getWordsOnScroll = debounce(async function () {
    if (menuSelected === 2) return;
    const scrollTotal = Number(wordListRef.current?.scrollTop);
    const heightWin =
      Number(wordListRef.current?.scrollHeight) -
      Number(wordListRef.current?.clientHeight);
    const scroll = (scrollTotal / heightWin) * 100;
    if (scroll >= Number(100) - Number(5)) {
      console.log("scroll");
      if (menuSelected === 0) {
        const index = wordsList.length;
        getWordsList(index);
      } else {
        const index = favoriteList.length;
        getWordsFavorite(index);
      }
    }
  }, 120);

  return (
    <S.Container>
      <S.WordListHeader>
        {menusListHeader.map(({ Icon, title }, index) => (
          <S.WordListHeaderButton
            key={title}
            selected={menuSelected === index}
            onClick={() => dispatch(setMenuSelectedAction(index))}
          >
            <T.Paragraph width="initial">{title}</T.Paragraph>
            <Icon color={menuSelected === index ? "secondary" : "action"} />
          </S.WordListHeaderButton>
        ))}
      </S.WordListHeader>
      <S.WordListContent ref={wordListRef} onScroll={getWordsOnScroll}>
        {menuSelected === 0 && wordsList.length
          ? wordsList.map((word) => (
              <S.WordListItem key={word.id} selected={wordData.id === word.id}>
                <S.WordListItemContent
                  onClick={() => setWordDetails(word.word)}
                >
                  <T.Paragraph>{word.word}</T.Paragraph>
                </S.WordListItemContent>
                <div>
                  {word.ind_favorite ? (
                    <Tooltip title="Remover dos favoritos">
                      <IconButton
                        onClick={() => removeWordsFavorite(Number(word.id))}
                      >
                        <FavoriteIcon color="secondary" />
                      </IconButton>
                    </Tooltip>
                  ) : (
                    <Tooltip title="Adicionar aos favoritos">
                      <IconButton
                        onClick={() => addWordsFavorite(Number(word.id))}
                      >
                        <FavoriteBorderIcon color="action" />
                      </IconButton>
                    </Tooltip>
                  )}
                </div>
              </S.WordListItem>
            ))
          : null}
        {menuSelected === 1 && favoriteList.length
          ? favoriteList.map((word) => (
              <S.WordListItem key={word.id} selected={wordData.id === word.id}>
                <S.WordListItemContent
                  onClick={() => setWordDetails(word.word)}
                >
                  <T.Paragraph>{word.word}</T.Paragraph>
                </S.WordListItemContent>
                <div>
                  {word.ind_favorite ? (
                    <Tooltip title="Remover dos favoritos">
                      <IconButton
                        onClick={() => removeWordsFavorite(Number(word.id))}
                      >
                        <FavoriteIcon color="secondary" />
                      </IconButton>
                    </Tooltip>
                  ) : (
                    <Tooltip title="Adicionar aos favoritos">
                      <IconButton
                        onClick={() => addWordsFavorite(Number(word.id))}
                      >
                        <FavoriteBorderIcon color="action" />
                      </IconButton>
                    </Tooltip>
                  )}
                </div>
              </S.WordListItem>
            ))
          : null}
        {menuSelected === 2 && historyList.length
          ? historyList.map((word) => (
              <S.WordListItem key={word.id} selected={wordData.id === word.id}>
                <S.WordListItemContent
                  onClick={() => setWordDetails(word.word)}
                >
                  <T.Paragraph>{word.word}</T.Paragraph>
                </S.WordListItemContent>
                <div>
                  {word.ind_favorite ? (
                    <Tooltip title="Remover dos favoritos">
                      <IconButton
                        onClick={() => removeWordsFavorite(Number(word.id))}
                      >
                        <FavoriteIcon color="secondary" />
                      </IconButton>
                    </Tooltip>
                  ) : (
                    <Tooltip title="Adicionar aos favoritos">
                      <IconButton
                        onClick={() => addWordsFavorite(Number(word.id))}
                      >
                        <FavoriteBorderIcon color="action" />
                      </IconButton>
                    </Tooltip>
                  )}
                </div>
              </S.WordListItem>
            ))
          : null}
      </S.WordListContent>
      <DrawerWordDetails
        openDrawer={openDrawerDetails}
        onCloseDrawer={() => setOpenDrawerDetails(false)}
      />
    </S.Container>
  );
}
