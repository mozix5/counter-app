import React, { useState } from "react";
import { Button, Grid, Segment } from "semantic-ui-react";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <Segment raised textAlign="center" compact>
      <Grid columns={2} centered>
        <Grid.Row>
          <h1>Count</h1>
        </Grid.Row>
        <Grid.Row>
          <h1>{count}</h1>
        </Grid.Row>
        <Grid.Row>
          <Button color="green" onClick={increment}>
            Increment
          </Button>
          <Button color="red" onClick={decrement} disabled={count === 0}>
            Decrement
          </Button>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default App;
