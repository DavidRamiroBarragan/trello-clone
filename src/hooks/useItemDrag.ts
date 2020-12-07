import { useAppState } from 'context/AppStateContext';
import { useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { DragItem } from 'types/DragItem';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState();
  const [, drag, preview] = useDrag({
    item,
    begin: () => dispatch({ type: 'SET_DRAGGE_ITEM', payload: item }),
    end: () => dispatch({ type: 'SET_DRAGGE_ITEM', payload: undefined }),
  });

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  return { drag };
};
