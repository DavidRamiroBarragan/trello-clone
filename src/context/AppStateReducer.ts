import { nanoid } from 'nanoid';
import { findItemIndexById, overrideItemAtIndex } from '../utils/arrayUtils';
import { Action, AppState } from './AppStateContext.types';

const AppStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'ADD_LIST': {
      return {
        ...state,
        list: [...state.list, { id: nanoid(), text: action.payload, tasks: [] }],
      };
    }
    case 'ADD_TASK': {
      const targetListIndex = findItemIndexById(state.list, action.paylload.listId);

      const targetItem = state.list[targetListIndex];

      const updatedTargetListItem = {
        ...targetItem,
        tasks: [...targetItem.tasks, { id: nanoid(), text: action.paylload.text }],
      };
      return {
        ...state,
        list: overrideItemAtIndex(state.list, updatedTargetListItem, targetListIndex),
      };
    }
    default: {
      return state;
    }
  }
};

export default AppStateReducer;
