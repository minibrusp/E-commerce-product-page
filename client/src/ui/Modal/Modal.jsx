import { cloneElement, createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';

import PropTypes, { element } from 'prop-types';

import BurgerCloseImg from '../../assets/images/icon-close.svg';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { Button, Overlay, StyledModal } from './Modal.styled';

const ModalContext = createContext();

function Modal({ children, variation }) {
  const [openName, setOpenName] = useState('');

  const close = () => setOpenName('');
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, open, close, variation }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close, variation } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (name !== openName) return;

  return createPortal(
    <Overlay $overlayvariations={variation}>
      <StyledModal ref={ref} $modalstylevariations={variation}>
        <Button onClick={close} $btnvariation={variation}>
          <img src={BurgerCloseImg} alt='close button' />
        </Button>
        {cloneElement(children, { onCloseModal: close })}
      </StyledModal>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

Modal.propTypes = {
  children: PropTypes.arrayOf(element),
  variation: PropTypes.string,
};

Modal.defaultProps = {
  variation: 'primary',
};

export default Modal;
