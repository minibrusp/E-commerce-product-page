import styled, { css } from 'styled-components';

export const buttonVariant = {
  checkout: css`
    color: var(--primary-pale-orange);
    background-color: var(--primary-orange);

    font-family: inherit;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 8px;
    width: 100%;
    padding: 1.125rem 0;
  `,
  gallery: css`
    width: 40px;
    height: 49px;
    padding: 16px 12px;
    border-radius: 100%;

    background-color: var(--neutral-white);
  `,
};

export const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  ${(props) => buttonVariant[props.$variant]}

  svg {
    fill: var(--neutral-grayish-blue);
  }

  &:hover {
    svg {
      fill: var(--neutral-black);
    }
  }
`;
