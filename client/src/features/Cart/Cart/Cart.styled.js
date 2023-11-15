import styled from 'styled-components';

export const StyledCart = styled.aside`
  position: fixed;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--neutral-white);
  border-radius: 8px;
  width: 100%;
  max-width: 360px;
  box-shadow: var(--shadow-md);
  padding: 1.2rem 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.563rem;
  text-align: left;

  @media screen and (min-width: 1024px) {
    top: 100px;
    left: unset;
    transform: unset;
    right: 2.7%;
  }

  @media screen and (min-width: 1280px) {
    position: unset;
    top: unset;
    left: unset;
    transform: unset;
  }
`;

export const StyledHeading = styled.h2`
  font-size: 1rem;
  padding: 0 1.5rem;
`;

export const StyledCartItems = styled.ul`
  width: 100%;
  border-top: 1px solid var(--neutral-grayish-blue);
  list-style-type: none;
  padding: 0 1.5rem;
  min-height: 190px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const StyledCartEmptyText = styled.li`
  font-size: 1.0625rem;
  font-weight: 600;
  color: var(--neutral-dark-grayish-blue);

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 190px;
`;
