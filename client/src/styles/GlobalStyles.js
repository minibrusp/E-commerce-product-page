import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root {
  --primary-orange: hsl(26, 100%, 55%);
  --primary-pale-orange: hsl(25, 100%, 94%);

  --neutral-very-dark-blue: hsl(220, 13%, 13%);
  --neutral-dark-grayish-blue: hsl(219, 9%, 45%);
  --neutral-grayish-blue: hsl(220, 14%, 75%);
  --neutral-light-grayish-blue: hsl(223, 64%, 98%);
  --neutral-white: hsl(0, 0%, 100%);
  --neutral-black: hsl(0, 0%, 0%);
  --neutral-black-lightbox: hsla(0, 0%, 0%, 0.75);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 16px;
}

body {
  font-family: 'Kumbh Sans';
  font-size: 1rem;
}

`;

export default GlobalStyles;
