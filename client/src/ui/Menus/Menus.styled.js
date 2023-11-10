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

  /* &:active svg,
  &:focus-visible svg {
    fill: green;
  } */
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

  /* right: ${(props) => props.$position.x}px; */
  /* top: ${(props) => props.$position.y}px; */
`;
