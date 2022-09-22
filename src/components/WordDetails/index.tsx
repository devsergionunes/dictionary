import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { IconButton, Tooltip } from "@mui/material";

import { ButtonPrimary, ButtonSecondary } from "../base/Buttons";
import * as T from "../base/Text";
import * as S from "./styles";

export function WordDetails() {
  return (
    <S.Container>
      <S.BoxHeader>
        <T.H6 textAlign="center">Word</T.H6>
        <T.H6 textAlign="center">Word 2</T.H6>
      </S.BoxHeader>
      <S.Content>
        <S.BoxAudio>
          <IconButton
            style={{
              marginLeft: "-8px",
            }}
          >
            <PauseIcon />
          </IconButton>
          <Tooltip followCursor arrow title={`${80}%`}>
            <S.ProgressBody>
              <S.ProgressBar percent={80} />
            </S.ProgressBody>
          </Tooltip>
        </S.BoxAudio>
        <S.BoxWordDetails>
          <T.H3>Word</T.H3>
          <T.Paragraph>Bla bla bla bla bka smcksm</T.Paragraph>
        </S.BoxWordDetails>
      </S.Content>
      <S.ContentFooter>
        <ButtonSecondary variant="outlined">Anterior</ButtonSecondary>
        <ButtonPrimary>Proximo</ButtonPrimary>
      </S.ContentFooter>
    </S.Container>
  );
}
