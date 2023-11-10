import styled, { css, keyframes } from 'styled-components';

const SlideLeft = keyframes`
  to {
    transform: translateX(0);
  }
`;

const overlayvariations = {
  primary: css``,
  burgerNav: css``,
};

const modalstylevariations = {
  primary: css`
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  burgerNav: css`
    top: 0;
    left: 0;
    padding: 95px 25px 24px 25px;
    min-height: 100vh;
    min-width: 250px;
    transform: translateX(-100%);
    animation: ${SlideLeft} 0.3s forwards;
  `,
};

const btnvariation = {
  primary: css`
    transform: translateX(0.8rem);
    padding: 0.4rem;
    top: 1.2rem;
    right: 1.9rem;
  `,
  burgerNav: css`
    top: 25px;
    left: 25px;
  `,
};

export const StyledModal = styled.div`
  position: fixed;
  background-color: var(--neutral-white);
  box-shadow: 0 2.4rem 3.2rem var(--neutral-black-lightbox);
  padding: 3.2rem 4rem;
  transition: all 0.5s;

  ${(props) => modalstylevariations[props.$modalstylevariations]}
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--neutral-black-lightbox);
  backdrop-filter: blur(1px);
  z-index: 1000;
  transition: all 0.5s;
  ${(props) => overlayvariations[props.$overlayvariations]}
`;

export const Button = styled.button`
  background: none;
  border: none;
  border-radius: 5px;
  transition: all 0.2s;
  position: absolute;
  cursor: pointer;

  ${(props) => btnvariation[props.$btnvariation]}

  &:hover {
    background-color: lightgrey;
  }
`;
