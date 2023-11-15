import styled, { css } from 'styled-components';

const variations = {
  lightbox: css`
    @media screen and (min-width: 1024px) {
      display: flex;

      padding: 0px;
      width: 110%;
      left: -5%;
      top: -5%;
    }
  `,
};

export const StyledImageGalleryNav = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  @media screen and (min-width: 1024px) {
    display: none;
  }

  ${(props) => variations[props.$variant]}
`;
