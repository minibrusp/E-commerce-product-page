import styled, { css } from 'styled-components';

const variationImageThumbnails = {
  lightbox: css`
    @media screen and (min-width: 1024px) {
      justify-content: center;
      gap: 1.7rem;

      position: relative;
      z-index: 5;
    }
  `,
};

export const StyledImageThumbnails = styled.div`
  display: none;
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    display: flex;
  }

  ${(props) => variationImageThumbnails[props.$variation]}
`;

export const StyledImageContainer = styled.label`
  display: block;
  border: 2px solid transparent;
  position: relative;
  border-radius: 10px;
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: var(--primary-pale-orange);
    z-index: 5;
    opacity: 0;
    border-radius: 10px;
  }

  &:hover {
    opacity: 0.5;
  }

  ${(props) =>
    props.$isChecked &&
    css`
      border: 2px solid var(--primary-orange);
      &::after {
        opacity: 0.7;
      }
    `}
`;

export const StyledRadio = styled.input.attrs({ type: 'radio' })`
  display: none;
`;

export const StyledImage = styled.img`
  display: block;
  height: 88px;
  width: 88px;
  border-radius: 10px;
`;
