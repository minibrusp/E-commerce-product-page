import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  text-align: center;
  margin: 1rem auto;
  font-size: small;
  color: var(--neutral-dark-grayish-blue);
`;

const StyledLink = styled.a`
  font-weight: 700;
  padding: 5px;
  text-decoration: none;
  color: var(--primary-orange);
  background-color: var(--primary-pale-orange);

  &:hover {
    opacity: 0.7;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <p>
        Challenge by
        <StyledLink
          href='https://www.frontendmentor.io?ref=challenge'
          target='_blank'
          title='link to frontendmentor'
          tabIndex={0}
          rel='noreferrer'
        >
          Frontend Mentor
        </StyledLink>
        . Coded by
        <StyledLink
          href='https://www.frontendmentor.io/profile/minibrusp'
          target='_blank'
          title='link to user profile on frontendmentor'
          tabIndex={0}
          rel='noreferrer'
        >
          XIII
        </StyledLink>
        .
      </p>
    </StyledFooter>
  );
}
