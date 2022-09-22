import { Box } from "@mui/material";
import styled, { css } from "styled-components";

export const Container = styled(Box)`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.background.default};
    width: 100%;
    min-height: 100vh;
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
`;

export const Body = styled.div`
  padding: 1rem 5% 0 5%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media screen {
    @media (max-width: 768px) {
      padding: 0.5rem 2% 0.5rem 2%;
    }
  }
`;
