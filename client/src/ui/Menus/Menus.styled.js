import styled from 'styled-components';

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const StyledToggle = styled.button`
  font-family: inherit;
  font-size: 1rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const StyledItem = styled.div`
  width: 100%;
  background-color: var(--neutral-white);
  /* position: fixed;

  background-color: var(--neutral-white);
  box-shadow: 0 1px 2px var(--neutral-black);
  width: 100%;

  right: 0;
  top: 70px; */

  /* position: fixed;
    right: 10px;
    top: 90.5px;
    background-color: transparent; */

  @media screen and (min-width: 1280px) {
    width: 360px;
    position: fixed;
    right: ${(props) => props.$position.x - 129}px;
    top: ${(props) => props.$position.y + 20}px;
    background-color: transparent;
  }

  @media screen and (min-width: 1440px) {
    right: ${(props) => props.$position.x - 174}px;
  }
`;
