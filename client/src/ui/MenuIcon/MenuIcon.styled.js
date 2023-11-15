import { ReactSVG } from 'react-svg';
import styled, { css } from 'styled-components';

export const svgVariant = {
  default: css`
    fill: var(--neutral-dark-grayish-blue);

    &:hover {
      fill: var(--neutral-black);
    }
  `,
  cart: css`
    fill: var(--neutral-dark-grayish-blue);
    transition: fill 0.5s ease;

    &:hover,
    &:active {
      fill: var(--neutral-black);
    }
  `,
  avatar: css`
    height: 24px;
    width: 24px;
  `,
  gallery: css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  `,
  addCart: css`
    svg {
      fill: var(--neutral-white);
    }

    &:hover {
      svg {
        fill: var(--neutral-white);
      }
    }
  `,
};

export const imgVariant = {
  avatar: css`
    height: 26px;
    width: 26px;
    border: 2px solid transparent;
    cursor: pointer;
    transition: border-color 0.5s ease;
    border-radius: 100%;

    &:hover {
      border: 2px solid var(--primary-orange);
    }

    @media screen and (min-width: 1024px) {
      height: 50px;
      width: 50px;
    }
  `,
  gallery: css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  `,
};

export const StyledSVG = styled(ReactSVG)`
  svg {
    ${(props) => svgVariant[props.$variant]}

    ${(props) =>
      props.$isCartOpen &&
      css`
        fill: var(--neutral-black);
      `}
  }
`;

export const StyledIcon = styled.img`
  ${(props) => imgVariant[props.$variant]}
`;
