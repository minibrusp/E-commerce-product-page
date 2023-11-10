import styled from 'styled-components';

const StyledUnorderedList = styled.ul``;

export default function Nav() {
  return (
    <StyledUnorderedList>
      <li>Collection</li>
      <li>Men</li>
      <li>Women</li>
      <li>About</li>
      <li>Contact</li>
    </StyledUnorderedList>
  );
}
