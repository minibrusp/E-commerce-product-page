import styled from 'styled-components';

export const StyledAddProduct = styled.div`
  /* padding: 0 1.5625rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  margin: 1.3125rem auto;

  @media screen and (min-width: 640px) {
    max-width: 500px;
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
