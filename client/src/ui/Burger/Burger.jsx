import { StyledBurger, StyleBurgerImage } from './Burger.styled';
// import { bool, func } from 'prop-types';
import BurgerOpenImg from '../../assets/images/icon-menu.svg';
// import BurgerCloseImg from '../../assets/images/icon-close.svg';

import PropTypes from 'prop-types';

// export default function Burger({ open, setOpen }) {
//   const BurgerImg = useMemo(() => {
//     return open ? BurgerCloseImg : BurgerOpenImg;
//   }, [open]);
//   return (
//     <StyledBurger onClick={() => setOpen(!open)}>
//       <StyleBurgerImage src={BurgerImg} alt='burger' />
//     </StyledBurger>
//   );
// }

// Burger.propTypes = {
//   open: bool.isRequired,
//   setOpen: func.isRequired,
// };
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
