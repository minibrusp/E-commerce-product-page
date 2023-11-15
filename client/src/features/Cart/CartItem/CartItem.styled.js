import styled from 'styled-components';

export const StyledCartItem = styled.li`
  padding: 1rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 17px;
  width: 100%;
`;

export const StyledColumn = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

export const StyledCartItemImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const StyledDescription = styled.div`
  line-height: 1.6;
`;

export const StyledTitle = styled.p`
  color: var(--neutral-dark-grayish-blue);
`;

export const StyledPrice = styled.p`
  color: var(--neutral-dark-grayish-blue);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.25rem;
`;

export const StyledTotalPrice = styled.b`
  color: var(--neutral-black);
`;
