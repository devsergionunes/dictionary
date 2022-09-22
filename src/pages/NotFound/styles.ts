import styled, { css } from "styled-components";

export const content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const Image = styled.img`
  width: clamp(200px, 50%, 400px);
`;

export const LinkHome = styled.div`
  ${({ theme }) => css`
    width: clamp(200px, 50%, 400px);
    text-align: center;
    font-size: 1rem;
    font-weight: 700;
    color: ${theme.palette.primary.main};
    cursor: pointer;
  `}
`;
