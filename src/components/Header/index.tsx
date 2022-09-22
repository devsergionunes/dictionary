import { FormControlLabel } from "@mui/material";
import { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

import { setThemeAction } from "../../store/ducks/Utils/actions";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import * as T from "../base/Text";
import * as S from "./styles";

export function Header() {
  const navegation = useNavigate();

  const dispatch = useAppDispatch();
  const {
    theme: { mode },
  } = useAppSelector(({ Utils }) => Utils);

  const alterTheme = ({ currentTarget }: ChangeEvent<HTMLInputElement>) =>
    dispatch(setThemeAction(currentTarget.checked ? "dark" : "light"));

  return (
    <S.Container>
      <S.Content>
        <S.BoxLeft onClick={() => navegation("/")}>
          <img src="/images/logo.svg" alt="logo marca" />
          <T.H2>Dictionary</T.H2>
        </S.BoxLeft>
        <S.BoxRight>
          <FormControlLabel
            control={
              <S.MaterialUISwitch
                checked={mode === "dark"}
                onChange={alterTheme}
              />
            }
            label=""
            style={{ margin: 0 }}
          />
        </S.BoxRight>
      </S.Content>
    </S.Container>
  );
}
