import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HistoryIcon from "@mui/icons-material/History";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import { IconButton, Tooltip } from "@mui/material";
import { useState } from "react";

import * as T from "../base/Text";
import * as S from "./styles";

export function WordList() {
  const [wordSelected, setWordSelected] = useState(1);
  const [menuSelected, setMenuSelected] = useState(0);

  const menusListHeader = [
    {
      Icon: TextSnippetIcon,
      title: "Palavras",
    },
    {
      Icon: FavoriteIcon,
      title: "Favoritos",
    },
    {
      Icon: HistoryIcon,
      title: "Recentes",
    },
  ];
  return (
    <S.Container>
      <S.WordListHeader>
        {menusListHeader.map(({ Icon, title }, index) => (
          <S.WordListHeaderButton
            key={title}
            selected={menuSelected === index}
            onClick={() => setMenuSelected(index)}
          >
            <T.Paragraph width="initial">{title}</T.Paragraph>
            <Icon color={menuSelected === index ? "secondary" : "action"} />
          </S.WordListHeaderButton>
        ))}
      </S.WordListHeader>
      <S.WordListContent>
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
          38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
          55, 56, 57, 58, 59, 60,
        ].map((item) => (
          <S.WordListItem key={item} selected={item === wordSelected}>
            <S.WordListItemContent
              onClick={() => {
                console.log(item);
                setWordSelected(item);
              }}
            >
              <T.Paragraph>Wordkmcdkmkcdcm</T.Paragraph>
            </S.WordListItemContent>
            <div>
              {item === wordSelected ? (
                <Tooltip title="Remover dos favoritos">
                  <IconButton onClick={() => console.log("Remove Favorite")}>
                    <FavoriteIcon color="secondary" />
                  </IconButton>
                </Tooltip>
              ) : (
                <Tooltip title="Adicionar aos favoritos">
                  <IconButton onClick={() => console.log("Add Favorite")}>
                    <FavoriteBorderIcon color="action" />
                  </IconButton>
                </Tooltip>
              )}
            </div>
          </S.WordListItem>
        ))}
      </S.WordListContent>
    </S.Container>
  );
}
