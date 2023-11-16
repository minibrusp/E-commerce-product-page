import PropTypes from 'prop-types';
import { StyledButton, StyledButtonRow } from './Button.styled';
import MenuIcon from '../MenuIcon/';
import { MoonLoader } from 'react-spinners';
import { css } from 'styled-components';

function Button({
  text,
  variant,
  icon,
  alt,
  title,
  name,
  onClick: clickHandler,
  disabled,
  isLoading,
}) {
  if (isLoading)
    return (
      <StyledButton
        $variant={variant}
        title={title}
        name={name}
        onClick={clickHandler}
        disabled={disabled}
      >
        <StyledButtonRow>
          <MoonLoader size={15} color={css`var(--neutral-white)`} />
          {text && <span>{text}</span>}
        </StyledButtonRow>
      </StyledButton>
    );

  if (variant === 'gallery' || variant === 'cartQuantity')
    return (
      <StyledButton
        $variant={variant}
        title={title}
        name={name}
        onClick={clickHandler}
        disabled={disabled}
      >
        <MenuIcon as='image' src={icon} $variant={variant} />
      </StyledButton>
    );

  return (
    <StyledButton
      $variant={variant}
      title={title}
      name={name}
      onClick={clickHandler}
      disabled={disabled}
    >
      {icon && (
        <MenuIcon
          as='svg'
          src={icon}
          alt={alt}
          onClick={clickHandler}
          $variant={variant}
        />
      )}
      {text && <span>{text}</span>}
    </StyledButton>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.string,
  icon: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
};

Button.defaultProps = {
  variant: 'default',
  disabled: false,
  isLoading: false,
};

export default Button;
