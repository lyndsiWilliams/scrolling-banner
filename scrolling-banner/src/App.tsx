import ScrollingBanner from "./scrollingBanner";
import { styled } from "styled-components";

const StyledCenteredElement = styled.div`
  display: flex;
  justify-content: center;

  p {
    font-size: 2em;
  }
`;

const StyledCard = styled.div`
  height: 562px;
  width: 80vw;
  margin-top: 5%;
  background-color: gray;
  border: 12px solid rebeccapurple;
`;

function App() {
  return (
    <StyledCenteredElement>
      <StyledCard>
        <ScrollingBanner
          images={[
            "pixel/1.jpeg",
            "pixel/2.jpeg",
            "pixel/3.jpeg",
            "pixel/4.jpeg",
            "pixel/5.jpeg",
            "pixel/7.jpeg",
            "pixel/8.jpeg",
            "pixel/9.jpeg",
            "pixel/14.jpeg",
            "pixel/15.jpeg",
            "pixel/16.jpeg",
            "pixel/17.jpeg",
            "pixel/18.jpeg",
            "pixel/19.jpeg",
            "pixel/11.jpeg",
          ]}
        />
        <StyledCenteredElement>
          <p>Pixel McMeowkins</p>
        </StyledCenteredElement>
      </StyledCard>
    </StyledCenteredElement>
  );
}

export default App;
