import styled from 'styled-components';

export const StyledBurger = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const StyleBurgerImage = styled.img`
  min-width: 16px;
  min-height: 15px;
`;
