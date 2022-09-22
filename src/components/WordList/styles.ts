import { Card } from "@mui/material";
import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 0 2rem;
    height: 70vh;
    min-height: 70vh;

    ${theme.device.tablet} {
      height: 80vh;
      padding: 0 1rem;
    }
  `}
`;

export const WordListHeader = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
`;

export const WordListHeaderButton = styled.div<{ selected: boolean }>`
  ${({ theme, selected }) => css`
    width: 10rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;

    /* border: 1px solid ${theme.background.active}; */
    border: 1px solid ${theme.palette.primary.main};

    &:hover {
      border: 1px solid ${theme.palette.primary.main};
    }

    ${selected &&
    css`
      border: 1px solid ${theme.palette.primary.main};

      p {
        color: ${theme.palette.secondary.main};
      }
    `}

    ${theme.device.mobile} {
      flex: 1;
      width: min-content;
    }
  `}
`;

export const WordListContent = styled(Card)`
  ${({ theme }) => css`
    flex: 1;
    max-height: 60vh;
    overflow-y: scroll !important;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    border: 1px solid ${theme.palette.primary.main};

    scrollbar-width: 5px; /* for Firefox */
    scrollbar-color: transparent ${theme.border.light}; /* for Firefox */
    ::-webkit-scrollbar {
      width: 5px;
      background: ${theme.efects.linearGradiente};
    }
    ::-webkit-scrollbar-thumb {
      background: ${theme.text.primary};
      border-radius: 5px;
    }

    ${theme.device.tablet} {
      max-height: 80vh;
    }
  `}
`;

export const WordListItem = styled.div<{ selected: boolean }>`
  ${({ theme, selected }) => css`
    height: 3rem;
    border: 1px solid ${theme.background.active};
    z-index: 1;
    padding-right: 0.5rem;
    display: flex;
    align-items: center;
    transition: all 0.15s;
    cursor: pointer;

    p {
      text-align: center;
      font-weight: bold;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &:hover {
      border: 1px solid ${theme.palette.primary.main};
    }

    ${selected &&
    css`
      border: 1px solid ${theme.palette.primary.main};

      p {
        color: ${theme.palette.secondary.main};
      }
    `}
  `}
`;
export const WordListItemContent = styled.div`
  flex: 1;
  height: 100%;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
`;
