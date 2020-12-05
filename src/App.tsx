import React from 'react';
import { Column } from './components/Column';
import { AppContainer } from './styles';
import { AddNewItem } from './components/AddNewItem';
import { useAppState } from './context/AppStateContext';

function App(): JSX.Element {
  const { state, dispatch } = useAppState();
  return (
    <AppContainer>
      {state.list.map((list, i) => (
        <Column id={list.id} text={list.text} key={list.id} index={i} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={(text) => dispatch({ type: 'ADD_LIST', payload: text })}
      />
    </AppContainer>
  );
}

export default App;
