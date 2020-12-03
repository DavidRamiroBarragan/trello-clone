import React from "react";
import { Column } from "./components/Column";
import { Card } from "./components/Card";
import { AppContainer } from "./styles";
import { AddNewItem } from "./components/AddNewItem";
function App() {
  return (
    <AppContainer>
      <Column text="To DO">
        <Card text="Generate app scafold" />
      </Column>
      <Column text="In Progress">
        <Card text="Learn TypeScript" />
      </Column>
      <Column text="Done">
        <Card text="Begin to use static typing" />
      </Column>
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
}

export default App;
