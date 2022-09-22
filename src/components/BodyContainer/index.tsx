import { Header } from "../Header";
import * as S from "./styles";

type BodyContainerProps = {
  children: React.ReactNode;
};

export function BodyContainer({ children }: BodyContainerProps) {
  return (
    <S.Container>
      <S.Content>
        <Header />
        <S.Body>{children}</S.Body>
      </S.Content>
    </S.Container>
  );
}
