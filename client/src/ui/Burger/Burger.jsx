import { StyledBurger, StyleBurgerImage } from './Burger.styled';
import BurgerOpenImg from '../../assets/images/icon-menu.svg';

import PropTypes from 'prop-types';

export default function Burger({ onClick }) {
  return (
    <StyledBurger onClick={onClick}>
      <StyleBurgerImage src={BurgerOpenImg} alt='burger' />
    </StyledBurger>
  );
}

Burger.propTypes = {
  onClick: PropTypes.func,
};
