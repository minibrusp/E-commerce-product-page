import PropTypes from 'prop-types';
import { StyledIcon, StyledSVG } from './MenuIcon.styled';

export default function MenuIcon({ as, src, alt, variant, ...props }) {
  if (as === 'image')
    return <StyledIcon src={src} alt={alt} $variant={variant} />;
  if (as === 'svg')
    return <StyledSVG src={src} $variant={variant} {...props} />;
}

MenuIcon.propTypes = {
  as: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  variant: PropTypes.string,
};

MenuIcon.defaultProps = {
  as: 'image',
  variant: 'default',
};
