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

    &:hover,
    &:active {
      fill: var(--neutral-black);
    }
  `,
  avatar: css`
    height: 24px;
    width: 24px;
  `,
};

export const imgVariant = {
  avatar: css`
    height: 24px;
    width: 24px;
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
