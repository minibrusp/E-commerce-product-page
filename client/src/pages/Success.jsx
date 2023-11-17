import styled from 'styled-components';
import SuccessImg from '../assets/images/success.png';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import useCart from '../features/Cart/useCart';

const StyledSuccessPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.7rem;
  text-align: center;
  min-height: 70vh;

  padding: 20px 1.5625rem 25px 1.5rem;
`;

const StyledBanner = styled.img`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;

const StyledHeading = styled.h1`
  letter-spacing: 1px;
`;

const StyledText = styled.p`
  color: var(--neutral-dark-grayish-blue);
`;

const StyledLink = styled(Link)`
  padding: 1.2rem 1.7rem;
  border: 1px solid var(--primary-orange);
  border-radius: 15px;
  text-decoration: none;
  color: var(--neutral-white);
  background-color: var(--primary-orange);

  transition: color 0.5s ease, background-color 0.5s ease;

  &:hover {
    background-color: transparent;
    color: var(--primary-orange);
  }

  &:active {
    transform: scale(0.9);
  }
`;

const StyledEmpty = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Success() {
  const { getSession, status, customer, resetCart } = useCart();

  useEffect(() => {
    getSession();
    resetCart();
  }, []);

  if (status !== 'complete') return <StyledEmpty>loading</StyledEmpty>;

  if (status === 'complete')
    return (
      <StyledSuccessPage>
        <StyledBanner src={SuccessImg} alt='success banner' />
        <StyledHeading>Your Payment is Successful</StyledHeading>
        <StyledText>
          Hello {customer.name} , Thank you for purchasing from our store.
        </StyledText>
        <StyledLink to='/'>Continue Shopping</StyledLink>
      </StyledSuccessPage>
    );
}
