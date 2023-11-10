import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';
import styled, { css } from 'styled-components';

const svgVariant = {
  default: css`
    fill: var(--neutral-dark-grayish-blue);

    &:hover {
      fill: var(--neutral-black);
    }
  `,
  cart: css`
    fill: var(--neutral-dark-grayish-blue);

    &:hover,
    &:active {
      fill: var(--neutral-black);
    }
  `,
  avatar: css`
    height: 24px;
    width: 24px;
  `,
};

const imgVariant = {
  avatar: css`
    height: 24px;
    width: 24px;
  `,
};

const StyledSVG = styled(ReactSVG)`
  svg {
    ${(props) => svgVariant[props.$variant]}
  }
`;

const StyledIcon = styled.img`
  ${(props) => imgVariant[props.$variant]}
`;

export default function MenuIcon({ as, src, alt, variant }) {
  if (as === 'image')
    return <StyledIcon src={src} alt={alt} $variant={variant} />;
  if (as === 'svg') return <StyledSVG src={src} $variant={variant} />;
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
