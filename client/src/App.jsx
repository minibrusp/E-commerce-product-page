import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

const StyledApp = styled.div`
  width: 100%;
  text-align: center;
  background-color: tomato;
`;

const H1 = styled.h1`
  font-size: 1.4rem;
  padding: 1rem;
  text-align: center;
  color: blueviolet;
  text-transform: uppercase;
  letter-spacing: 1rem;
  font-weight: bold;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>Hello There </H1>
      </StyledApp>
    </>
  );
}

export default App;
