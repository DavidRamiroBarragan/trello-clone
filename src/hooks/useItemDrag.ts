import { useAppState } from 'context/AppStateContext';
import { useDrag } from 'react-dnd';
import { DragItem } from 'types/DragItem';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState();
  const [, drag] = useDrag({
    item,
    begin: () => dispatch({ type: 'SET_DRAGGE_ITEM', payload: item }),
    end: () => dispatch({ type: 'SET_DRAGGE_ITEM', payload: undefined }),
  });

  return { drag };
};
