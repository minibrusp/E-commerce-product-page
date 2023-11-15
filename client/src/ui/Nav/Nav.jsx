import PropTypes from 'prop-types';
import {
  StyledDesktopNav,
  StyledMobileNav,
  StyledNavLink,
  StyledUnorderedList,
} from './Nav.styled';

function MobileNav({ onCloseModal }) {
  return (
    <StyledMobileNav>
      <StyledUnorderedList>
        <li>
          <StyledNavLink href='#' onClick={onCloseModal}>
            Collections
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink href='#' onClick={onCloseModal}>
            Men
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink href='#' onClick={onCloseModal}>
            Women
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink href='#' onClick={onCloseModal}>
            About
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink href='#' onClick={onCloseModal}>
            Contact
          </StyledNavLink>
        </li>
      </StyledUnorderedList>
    </StyledMobileNav>
  );
}

function DesktopNav() {
  return (
    <StyledDesktopNav>
      <StyledUnorderedList>
        <li>
          <StyledNavLink href='#'>Collections</StyledNavLink>
        </li>
        <li>
          <StyledNavLink href='#'>Men</StyledNavLink>
        </li>
        <li>
          <StyledNavLink href='#'>Women</StyledNavLink>
        </li>
        <li>
          <StyledNavLink href='#'>About</StyledNavLink>
        </li>
        <li>
          <StyledNavLink href='#'>Contact</StyledNavLink>
        </li>
      </StyledUnorderedList>
    </StyledDesktopNav>
  );
}

function Nav() {
  return <div></div>;
}

Nav.Mobile = MobileNav;
Nav.Desktop = DesktopNav;

MobileNav.propTypes = {
  onCloseModal: PropTypes.func,
};

export default Nav;
