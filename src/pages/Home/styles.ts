import styled, { css } from "styled-components";

export const Conteiner = styled.div`
  ${({ theme }) => css`
    width: 100%;
    min-height: 80vh;
    display: flex;
    justify-content: space-between;
    padding-top: 4rem;
    gap: 2rem;

    ${theme.device.tablet} {
      padding-top: 2rem;
      max-height: initial;
    }
  `}
`;

export const ContentLeft = styled.div`
  ${({ theme }) => css`
    width: clamp(350px, 450px, 500px);

    ${theme.device.tablet} {
      display: none;
    }
  `}
`;

export const ContentRight = styled.div`
  flex: 1;
`;
