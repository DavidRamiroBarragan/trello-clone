import React, { useRef } from 'react';
import { useAppState } from 'context/AppStateContext';
import { AddNewItem } from './AddNewItem';
import { ColumnContainer, ColumnTitle } from '../UI/styles';
import { Card } from './Card';
import { Task } from 'context/AppStateContext.types';
import { useItemDrag } from 'hooks/useItemDrag';
import { useDrop } from 'react-dnd';
import { DragItem } from 'types/DragItem';
import { isHidden } from 'utils/isHidden';

interface ColumnProps {
  text: string;
  index: number;
  id: string;
  isPreview?: boolean;
}
export const Column = ({ text, index, id, isPreview }: ColumnProps): JSX.Element => {
  const { state, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);
  const { drag } = useItemDrag({ type: 'COLUMN', id, index, text });
  const [, drop] = useDrop({
    accept: 'COLUMN',
    hover(item: DragItem) {
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) return;

      dispatch({ type: 'MOVE_LIST', payload: { dragIndex, hoverIndex } });
      item.index = hoverIndex;
    },
  });

  drop(drag(ref));

  return (
    <ColumnContainer
      ref={ref}
      isPreview={isPreview}
      isHidden={isHidden(isPreview, state.draggedItem, 'COLUMN', id)}
    >
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map((task: Task) => (
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
