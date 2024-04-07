import { useState } from "react";
import "./App.css";
import LogoRotating from "./assets/LogoRotating";
import Button from "./assets/components/Button";
import GridContainer from "./assets/components/GridContainer";

function App() {
  return (
    <>
      <h1>Dando estilo a componentes 2</h1>
      <h2>Rotacion de Logo</h2>
      <LogoRotating />
      <hr />
      <h2>Test snapshots</h2>
      <div>
        <GridContainer>
          <Button>Default</Button>
          <Button type="success">Success</Button>
          <Button type="error">Error</Button>
          <Button type="warning">Warning</Button>
          <Button type="info">Info</Button>
        </GridContainer>
      </div>
    </>
  );
}

export default App;
