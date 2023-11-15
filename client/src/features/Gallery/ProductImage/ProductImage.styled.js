import styled, { css, keyframes } from 'styled-components';

const blur = keyframes`
  from {
    opacity: 0;
  }
`;

const variation = {
  Default: css`
    @media screen and (min-width: 1024px) {
      max-width: 445px;
    }
  `,
  lightbox: css`
    @media screen and (min-width: 1024px) {
      max-width: 550px;
    }
  `,
};

export const StyledProductImage = styled.img`
  width: 100%;
  position: relative;
  display: block;
  aspect-ratio: 5/4.19;
  cursor: pointer;
  /* aspect-ratio: 5 / 4; */
  /* transform: scaleX(1.1) scaleY(1.2); */
  /* animation: ${blur} 1s ease; */

  @media screen and (min-width: 1024px) {
    aspect-ratio: 1;
    border-radius: 10px;
  }

  ${(props) => variation[props.$variation]}
`;
