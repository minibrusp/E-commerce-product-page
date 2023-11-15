import styled, { keyframes } from 'styled-components';

const blur = keyframes`
  from {
    opacity: 0;
  }
`;

export const StyledImageGallery = styled.div`
  position: relative;
  /* overflow: hidden; */
  /* transform: scaleY(0.8) translateY(-49px); */

  @media screen and (min-width: 640px) {
    max-width: 500px;
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

export const StyledProductImage = styled.img`
  width: 100%;
  position: relative;
  display: block;
  aspect-ratio: 5/4.19;
  /* aspect-ratio: 5 / 4; */
  /* transform: scaleX(1.1) scaleY(1.2); */
  /* animation: ${blur} 1s ease; */

  @media screen and (min-width: 1024px) {
    aspect-ratio: 1;
    max-width: 445px;
    border-radius: 10px;
  }
`;

export const StyledGalleryNavContainer = styled.div`
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
`;
