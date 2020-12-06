import { nanoid } from 'nanoid';
import { findItemIndexById, moveItem, overrideItemAtIndex } from 'utils/arrayUtils';
import { Action, AppState } from './AppStateContext.types';

const AppStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'ADD_LIST': {
      return {
        ...state,
        lists: [...state.lists, { id: nanoid(), text: action.payload, tasks: [] }],
      };
    }
    case 'ADD_TASK': {
      const targetListIndex = findItemIndexById(state.lists, action.paylload.listId);

      const targetItem = state.lists[targetListIndex];

      const updatedTargetListItem = {
        ...targetItem,
        tasks: [...targetItem.tasks, { id: nanoid(), text: action.paylload.text }],
      };
      return {
        ...state,
        lists: overrideItemAtIndex(state.lists, updatedTargetListItem, targetListIndex),
      };
    }
    case 'MOVE_LIST': {
      const { dragIndex, hoverIndex } = action.payload;
      return {
        ...state,
        lists: moveItem(state.lists, dragIndex, hoverIndex),
      };
    }
    case 'SET_DRAGGE_ITEM': {
      return { ...state, draggedItem: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default AppStateReducer;
