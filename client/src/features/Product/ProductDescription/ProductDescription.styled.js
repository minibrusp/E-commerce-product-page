import styled from 'styled-components';

export const StyledProductDescription = styled.div`
  background-color: var(--neutral-white);
`;

export const StyledCompany = styled.h2`
  text-transform: uppercase;
  color: var(--primary-orange);
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 2px;
`;
export const StyledName = styled.h3`
  font-size: 1.7rem;
  line-height: 1.16;
  margin: 1rem auto;
  color: var(--neutral-black);

  @media screen and (min-width: 1024px) {
    font-size: 2.7rem;
    line-height: 1.12;
    margin: 1.2rem auto;
  }
`;
export const StyledDescription = styled.p`
  color: var(--neutral-dark-grayish-blue);
  margin: 20px auto;
  line-height: 1.567;

  @media screen and (min-width: 1024px) {
    line-height: 1.59;
    margin: 35px auto;
    margin-bottom: 25px;
  }
`;
