import { Card } from "@mui/material";
import styled, { css } from "styled-components";

type ProgressBarProps = {
  percent: number;
};

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 0 2rem;
`;

export const BoxHeader = styled(Card)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    width: 100%;
    height: 220px;
    border: 1px solid ${theme.palette.primary.main} !important;
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 100%;
`;

export const BoxWordDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const BoxAudio = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ProgressBody = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 0.5rem;
    background-color: ${theme.border.light};
    border-radius: 0.625rem;
    position: relative;
    cursor: pointer;
  `}
`;

export const ProgressBar = styled.div<ProgressBarProps>`
  ${({ theme, percent }) => css`
    width: ${percent}%;
    height: 100%;
    transition: width 0.5s ease-in-out;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 0.625rem;
    background-image: ${theme.efects.linearGradiente};
  `}
`;

export const ContentFooter = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
`;
