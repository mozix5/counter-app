import React, { useState } from "react";
import { Grid, Button, Segment,Container } from "semantic-ui-react";

function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <div>
      <Grid
        textAlign="center"
        style={{ height: "97vh",position:"relative", left: "620px" }}
        verticalAlign="middle"
      >
        <Grid.Column>
          <Segment compact raised textAlign="center" padded>
            <h1>Count</h1>
            <h1>{count}</h1>
            <Button positive onClick={increment}>
              Increment
            </Button>
            <Button negative disabled={count === 0} onClick={decrement}>
              Decrement
            </Button>
          </Segment>
        </Grid.Column>
      </Grid>
      <Segment inverted attached="bottom">
        <Container textAlign="center">
          Done by Mosin 12020702
        </Container>
      </Segment>
    </div>
  );
}

export default App;
