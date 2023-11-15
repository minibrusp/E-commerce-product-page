import styled from 'styled-components';

export const StyledMobileNav = styled.nav``;

export const StyledDesktopNav = styled.nav`
  display: none;

  @media screen and (min-width: 1024px) {
    display: block;
  }
`;

export const StyledUnorderedList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 1.55rem;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    gap: 2rem;
  }
`;

export const StyledNavLink = styled.a`
  font-size: 1.1rem;
  text-decoration: none;
  font-weight: 700;
  color: var(--neutral-very-dark-blue);
  transition: color 0.3s ease;

  @media screen and (min-width: 1024px) {
    position: relative;
    font-size: 0.9375rem;
    font-weight: 400;
    color: var(--neutral-dark-grayish-blue);

    &::after {
      content: '';
      position: absolute;
      bottom: -60px;
      left: 0;
      background-color: var(--primary-orange);
      width: 100%;
      height: 4px;
      transform-origin: center;
      transform: scaleX(0);
      transition: transform 0.5s ease;
    }

    &:hover,
    &:focus-within {
      color: var(--neutral-black);
      outline: none;

      &::after {
        transform: scaleX(1.2);
      }
    }
  }
`;
