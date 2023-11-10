import logoSrc from '../../assets/images/logo.svg';
import { Img, StyledLogo } from './Logo.styled';

export default function Logo() {
  return (
    <StyledLogo>
      <Img src={logoSrc} alt='logo' />
    </StyledLogo>
  );
}
