import styled, { css } from 'styled-components';

export const buttonVariant = {
  default: css`
    svg {
      fill: var(--neutral-grayish-blue);
    }

    &:hover {
      svg {
        fill: var(--neutral-black);
      }
    }
  `,
  checkout: css`
    color: var(--primary-pale-orange);
    background-color: var(--primary-orange);

    font-family: inherit;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 8px;
    width: 100%;
    padding: 1.125rem 0;

    &:hover {
      opacity: 0.75;
    }
  `,
  addCart: css`
    color: var(--neutral-white);
    background-color: var(--primary-orange);

    font-family: inherit;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 8px;
    width: 100%;
    padding: 1rem 0;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    svg {
      fill: var(--neutral-white);
    }

    &:hover {
      opacity: 0.75;

      svg {
        fill: var(--neutral-white);
      }
    }
  `,
  gallery: css`
    min-width: 40px;
    min-height: 40px;
    padding: 10px 12px;
    border-radius: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--neutral-white);

    img {
      /* transform: scale(0.7); */
      transform: scaleY(0.7) scaleX(0.95);
    }
  `,
  cartQuantity: css`
    min-width: 40px;
    min-height: 40px;
    padding: 10px 12px;

    background-color: transparent;
  `,
};

export const StyledButton = styled.button`
  cursor: pointer;
  border: none;

  ${(props) => buttonVariant[props.$variant]}
`;
