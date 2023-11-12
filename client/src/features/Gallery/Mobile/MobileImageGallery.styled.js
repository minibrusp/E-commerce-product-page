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
`;

export const StyledProductImage = styled.img`
  width: 100%;
  position: relative;
  display: block;
  aspect-ratio: 5 / 4;
  /* transform: scaleX(1.1) scaleY(1.2); */
  /* animation: ${blur} 1s ease; */
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
`;
