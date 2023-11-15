import styled from 'styled-components';

export const StyledProductPrice = styled.p`
  margin: 1px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.7rem;
  }
`;

export const StyledColumn = styled.span`
  &:first-of-type {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
  }
`;

export const StyledPrice = styled.b`
  font-size: 1.7rem;
  color: var(--neutral-black);
  letter-spacing: 1.5px;
`;

export const StyledDiscount = styled.b`
  color: var(--primary-orange);
  background-color: var(--primary-pale-orange);
  padding: 3px 9px;
  border-radius: 7px;
`;

export const StyledOriginalPrice = styled.s`
  color: var(--neutral-grayish-blue);
  font-weight: 600;
`;
