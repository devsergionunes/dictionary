import { Drawer } from "@mui/material";
import styled, { css } from "styled-components";

export const DrawerBottom = styled(Drawer)``;

export const DrawerContainer = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: minmax(min-content, 90vh);
    min-height: 70vh;
    padding: 0 3rem;
    position: relative;
    padding-bottom: 3rem;
  `}
`;

export const DrawerHeader = styled.div`
  ${() => css`
    align-self: flex-start;
    width: 100%;
    height: 3rem;
    margin-top: 1rem;
    padding-right: 2rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `}
`;
