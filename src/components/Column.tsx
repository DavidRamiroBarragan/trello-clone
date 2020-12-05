import { useAppState } from '../context/AppStateContext';
import { AddNewItem } from './AddNewItem';
import { ColumnContainer, ColumnTitle } from '../styles';
import { Card } from './Card';
import React from 'react';

interface ColumnProps {
  text: string;
  index: number;
  id: string;
}
export const Column = ({ text, index, id }: ColumnProps): JSX.Element => {
  const { state, dispatch } = useAppState();
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {state.list[index].tasks.map((task) => (
        <Card text={task.text} key={task.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={(text) => dispatch({ type: 'ADD_TASK', paylload: { text, listId: id } })}
        dark
      />
    </ColumnContainer>
  );
};
