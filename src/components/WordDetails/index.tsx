/* eslint-disable jsx-a11y/media-has-caption */
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { IconButton, Tooltip } from "@mui/material";
import { useEffect, useRef, useState } from "react";

import { useWordActions } from "../../hooks/useWordActions";
import { useAppSelector } from "../../store/hooks";
import { ButtonPrimary, ButtonSecondary } from "../base/Buttons";
import * as T from "../base/Text";
import * as S from "./styles";

export function WordDetails() {
  const refAudio = useRef<HTMLAudioElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [audioProgrees, setAudioProgrees] = useState(0);
  const { wordData, wordsList, menuSelected } = useAppSelector(
    ({ Words }) => Words
  );

  const { getWordData, removeWordsFavorite, addWordsFavorite } =
    useWordActions();

  const setSeeked = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (refAudio.current) {
      const { clientX } = e;
      const { left, width } = e.currentTarget.getBoundingClientRect();
      const percent = (clientX - left) / width;
      const newTime = percent * refAudio.current.duration;
      setAudioProgrees(newTime);
      refAudio.current.currentTime = newTime;
    }
  };

  const timeUpdate = (e: React.SyntheticEvent<HTMLAudioElement, Event>) => {
    const time = e.currentTarget?.currentTime || 0;
    const duration = e.currentTarget?.duration || 0;
    const progress = (time / duration) * 100;
    setAudioProgrees(progress);
  };

  const nextWord = () => {
    const index = wordsList.findIndex((word) => word.id === wordData.id);
    const nextWord = wordsList[index + 1];
    getWordData(nextWord.word);
  };

  const prevWord = () => {
    const index = wordsList.findIndex((word) => word.id === wordData.id);
    const nextWord = wordsList[index - 1];
    getWordData(nextWord.word);
  };

  useEffect(() => {
    if (refAudio.current) {
      refAudio.current.pause();
      refAudio.current.load();
    }
  }, [refAudio]);

  return (
    <S.Container>
      {wordData.id ? (
        <>
          <S.BoxHeader>
            <T.H6 textAlign="center">{wordData.word}</T.H6>
            {wordData.phonetic && (
              <T.H6 textAlign="center">{wordData.phonetic}</T.H6>
            )}
            <S.BoxIconFavorite>
              {wordData.ind_favorite ? (
                <Tooltip title="Remover dos favoritos">
                  <IconButton
                    onClick={() => removeWordsFavorite(Number(wordData.id))}
                  >
                    <FavoriteIcon color="secondary" />
                  </IconButton>
                </Tooltip>
              ) : (
                <Tooltip title="Adicionar aos favoritos">
                  <IconButton
                    onClick={() => addWordsFavorite(Number(wordData.id))}
                  >
                    <FavoriteBorderIcon color="action" />
                  </IconButton>
                </Tooltip>
              )}
            </S.BoxIconFavorite>
          </S.BoxHeader>
          <S.Content>
            {wordData.phonetics?.length && wordData.phonetics[0].audio ? (
              <S.BoxAudio>
                <IconButton
                  style={{
                    marginLeft: "-8px",
                  }}
                  onClick={() => {
                    if (refAudio.current) {
                      if (refAudio.current.paused) {
                        refAudio.current.play();
                      } else {
                        refAudio.current.pause();
                      }
                    }
                  }}
                >
                  {isPaused ? <PauseIcon /> : <PlayArrowIcon />}
                </IconButton>
                <S.ProgressBody onClick={setSeeked}>
                  <S.ProgressBar percent={audioProgrees} />
                </S.ProgressBody>
                <audio
                  ref={refAudio}
                  src={wordData.phonetics[0].audio}
                  preload="preload"
                  onPlay={() => setIsPaused(true)}
                  onPause={() => setIsPaused(false)}
                  onTimeUpdate={timeUpdate}
                />
              </S.BoxAudio>
            ) : null}
            <S.BoxWordDetails>
              {wordData.meanings?.length && (
                <>
                  <T.H3>Meanings</T.H3>
                  {wordData.meanings.map((meaning, index) => (
                    <T.Paragraph key={Math.random()}>
                      {index + 1} - {meaning.partOfSpeech} -{" "}
                      {meaning.definitions[0].definition}
                    </T.Paragraph>
                  ))}
                </>
              )}
            </S.BoxWordDetails>
          </S.Content>
          {menuSelected === 0 && (
            <S.ContentFooter>
              <ButtonSecondary variant="outlined" onClick={prevWord}>
                Prev
              </ButtonSecondary>
              <ButtonPrimary onClick={nextWord}>Next</ButtonPrimary>
            </S.ContentFooter>
          )}
        </>
      ) : (
        <div>
          <T.H3 textAlign="center">Word not found</T.H3>
          <img src="/images/404-word.svg" alt="ilustration" />
        </div>
      )}
    </S.Container>
  );
}
