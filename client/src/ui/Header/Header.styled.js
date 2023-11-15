import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 1.5625rem 25px 1.5rem;
  background-color: white;
  width: 100%;

  @media screen and (min-width: 1024px) {
    /* padding: 41.5px 0 44.5px 0; */
    padding: 30.5px 0;
    margin: 0 auto;
    max-width: 95%;
    border-bottom: 1px solid var(--neutral-grayish-blue);
  }

  @media screen and (min-width: 1280px) {
    max-width: 73rem;
  }
`;

export const StyledHeaderCol = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media screen and (min-width: 1024px) {
    &:first-of-type {
      gap: 3.5rem;
    }
    &:last-of-type {
      gap: 3rem;
    }
  }
`;
