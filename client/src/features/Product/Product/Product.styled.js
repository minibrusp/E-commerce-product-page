import styled from 'styled-components';

export const StyledProduct = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    /* margin: 4.375rem auto; */
    max-width: 95%;
    min-height: 80vh;
    margin: 0 auto;

    @media screen and (max-height: 750px) {
      margin: 4.375rem auto;
    }
  }

  @media screen and (min-width: 1024px) {
    gap: 2.5rem;
  }

  @media screen and (min-width: 1280px) {
    gap: 7.8125rem;
  }
`;

export const StyledProductDetails = styled.div`
  padding: 0 1.5625rem;
  margin: 1.3125rem auto;

  @media screen and (min-width: 640px) {
    max-width: 445px;
    padding: 0;
  }

  @media screen and (min-width: 768px) {
    max-width: 800px;
  }

  @media screen and (min-width: 1024px) {
    margin-left: 0;
    max-width: 445px;
  }
`;
