import { useState } from "react";
import { Badge, Button, Card, CardTitle } from "@ui-kit/components";
import { css } from "../styled-system/css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      })}
    >
      <Card className={css({ padding: "2em" })}>
        <CardTitle className={css({ mb: "2" })}>UI Kit demo</CardTitle>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p className={css({ mt: "2" })}>
          <Badge>Awesome</Badge>
        </p>
      </Card>
    </div>
  );
}

export default App;
