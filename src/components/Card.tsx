import { useAppState } from 'context/AppStateContext';
import { useItemDrag } from 'hooks/useItemDrag';
import React, { useRef } from 'react';
import { useDrop } from 'react-dnd';
import { CardDragItem } from 'types/DragItem';
import { isHidden } from 'utils/isHidden';
import { CardContainer } from '../UI/styles';

interface CardProps {
  text: string;
  index: number;
  id: string;
  columnId: string;
  isPreview?: boolean;
}

export const Card = ({ text, id, index, columnId, isPreview }: CardProps): JSX.Element => {
  const { state, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);
  const { drag } = useItemDrag({ type: 'CARD', id, index, text, columnId });
  const [, drop] = useDrop({
    accept: 'CARD',
    hover(item: CardDragItem) {
      if (item.id === id) {
        return;
      }
      const dragIndex: number = item.index;
      const hoverIndex: number = index;
      const sourceColumn: string = item.columnId;
      const targetColumn: string = columnId;

      dispatch({
        type: 'MOVE_TASK',
        payload: { dragIndex, hoverIndex, sourceColumn, targetColumn },
      });
      item.index = hoverIndex;
      item.columnId = targetColumn;
    },
  });
  drop(drag(ref));

  return (
    <CardContainer
      isHidden={isHidden(isPreview, state.draggedItem, 'CARD', id)}
      isPreview={isPreview}
      ref={ref}
    >
      {text}
    </CardContainer>
  );
};
