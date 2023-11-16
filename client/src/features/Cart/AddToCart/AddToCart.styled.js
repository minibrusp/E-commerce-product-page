import styled from 'styled-components';

export const StyledAddToCart = styled.div`
  /* padding: 0 1.5625rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  margin: 1.3125rem auto;

  @media screen and (min-width: 640px) {
    max-width: 445px;
  }

  @media screen and (min-width: 768px) {
    max-width: 800px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 445px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }
`;

export const StyledQuantityNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  background-color: var(--neutral-light-grayish-blue);
  border-radius: 7px;
  padding: 7.5px;

  @media screen and (min-width: 640px) {
    padding: 7.5px 0;
  }

  @media screen and (min-width: 1280px) {
    max-width: 9.8125rem;
  }
`;

export const StyledQuantity = styled.span`
  min-width: 40px;
  min-height: 40px;
  max-width: 40px;
  padding: 10px 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;
  text-align: center;
  border: transparent;
  background-color: transparent;
`;
