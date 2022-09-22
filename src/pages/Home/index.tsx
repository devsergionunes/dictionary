import { BodyContainer } from "../../components/BodyContainer";
import { WordDetails } from "../../components/WordDetails";
import { WordList } from "../../components/WordList";
import * as S from "./styles";

export function Home() {
  return (
    <BodyContainer>
      <S.Conteiner>
        <S.ContentLeft>
          <WordDetails />
        </S.ContentLeft>
        <S.ContentRight>
          <WordList />
        </S.ContentRight>
      </S.Conteiner>
    </BodyContainer>
  );
}
