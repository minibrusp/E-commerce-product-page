import styled from 'styled-components';

const StyledBox = styled.div`
  border: 1px solid black;
  background-color: cadetblue;
  height: 8px;
  width: 100%;
  font-size: 1px;
`;

export default function Home() {
  return (
    <div>
      <StyledBox />
      <hr />
      Home Page
    </div>
  );
}
