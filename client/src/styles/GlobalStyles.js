import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap');

:root {
  --Primary-Orange: hsl(26, 100%, 55%);
  --Primary-Pale-Orange: hsl(25, 100%, 94%);

  --Neutral-Very-Dark-Blue: hsl(220, 13%, 13%);
  --Neutral-Dark-Grayish-Blue: hsl(219, 9%, 45%);
  --Neutral-Grayish-Blue: hsl(220, 14%, 75%);
  --Neutral-Light-Grayish-Blue: hsl(223, 64%, 98%);
  --Neutral-White: hsl(0, 0%, 100%);
  --Neutral-Black: hsl(0, 0%, 0%)
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
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 1rem;
}

`;

export default GlobalStyles;
