import PropTypes from 'prop-types';
import {
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

function Nav() {
  return <div>Nav</div>;
}

Nav.Mobile = MobileNav;

MobileNav.propTypes = {
  onCloseModal: PropTypes.func,
};

export default Nav;
