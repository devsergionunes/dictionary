import { useNavigate } from "react-router-dom";

import { BodyContainer } from "../../components/BodyContainer";
import * as S from "./styles";

export function NotFound() {
  const navegation = useNavigate();
  return (
    <BodyContainer>
      <S.content>
        <S.Image src="/images/404.svg" alt="Ilustração de erro 404" />
        <S.LinkHome onClick={() => navegation("/")}>
          Voltar para home
        </S.LinkHome>
      </S.content>
    </BodyContainer>
  );
}
