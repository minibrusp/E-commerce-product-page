import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';
import MenuIcon from '../MenuIcon/MenuIcon';

function Button({
  text,
  variant,
  icon,
  alt,
  title,
  name,
  onClick: clickHandler,
}) {
  if (variant === 'gallery' || variant === 'cartQuantity')
    return (
      <StyledButton
        $variant={variant}
        title={title}
        name={name}
        onClick={clickHandler}
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
};

Button.defaultProps = {
  variant: 'default',
};

export default Button;
