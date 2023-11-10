import { createContext, useContext, useState } from 'react';
import PropTypes, { element } from 'prop-types';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { createPortal } from 'react-dom';
import { Menu, StyledItem, StyledToggle } from './Menus.styled';

const MenusContext = createContext();

function Menus({ children }) {
  const [openName, setOpenName] = useState('');
  const [position, setPosition] = useState(null);

  const close = () => setOpenName('');
  const open = setOpenName;

  return (
    <MenusContext.Provider
      value={{ openName, close, open, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

function Toggle({ children, opens: opensWindowName }) {
  const { openName, close, open, setPosition } = useContext(MenusContext);

  const handleClick = (e) => {
    e.stopPropagation();
    const rect = e.target.closest('button').getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });

    openName === '' || openName !== opensWindowName
      ? open(opensWindowName)
      : close();
  };

  return (
    <StyledToggle onClick={handleClick} $opens={opensWindowName}>
      {children}
    </StyledToggle>
  );
}

function Item({ name, children }) {
  const { openName, position, close } = useContext(MenusContext);
  const ref = useOutsideClick(close, false);

  if (openName !== name) return null;

  return createPortal(
    <StyledItem $position={position} ref={ref}>
      {children}
    </StyledItem>,
    document.body
  );
}

Menus.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(element),
    PropTypes.element,
  ]),
};

Toggle.propTypes = {
  children: PropTypes.element,
  opens: PropTypes.string,
};

Item.propTypes = {
  name: PropTypes.string,
  children: PropTypes.element,
};

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.Item = Item;

export default Menus;
