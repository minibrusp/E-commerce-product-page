import styled from 'styled-components';

export const StyledImageGallery = styled.div`
  position: relative;
  /* overflow: hidden; */
  /* transform: scaleY(0.8) translateY(-49px); */

  @media screen and (min-width: 640px) {
    max-width: 445px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;

    margin-right: 0;
  }
`;
