import { nanoid } from 'nanoid';
import {
  findItemIndexById,
  insertItemAtIndex,
  moveItem,
  overrideItemAtIndex,
  removeItemAtIndex,
} from 'utils/arrayUtils';
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
    case 'MOVE_TASK': {
      const { dragIndex, hoverIndex, sourceColumn, targetColumn } = action.payload;
      /* Get the source and the traget list index to move the task*/
      const sourceListIndex = findItemIndexById(state.lists, sourceColumn);
      const targetListIndex = findItemIndexById(state.lists, targetColumn);
      /*List from I take the task */
      const sourceList = state.lists[sourceListIndex];
      /* Task to move */
      const task = sourceList.tasks[dragIndex];
      /* Source list updated */
      const updateSourceList = {
        ...sourceList,
        tasks: removeItemAtIndex(sourceList.tasks, dragIndex),
      };

      /* New state updated */
      const stateWithUpdatedSourceList = {
        ...state,
        lists: overrideItemAtIndex(state.lists, updateSourceList, sourceListIndex),
      };

      /**list where we add the drag task */
      const targetList = stateWithUpdatedSourceList.lists[targetListIndex];

      const updatedTargetList = {
        ...targetList,
        tasks: insertItemAtIndex(targetList.tasks, task, hoverIndex),
      };

      return {
        ...stateWithUpdatedSourceList,
        lists: overrideItemAtIndex(
          stateWithUpdatedSourceList.lists,
          updatedTargetList,
          targetListIndex
        ),
      };
    }
    default: {
      return state;
    }
  }
};

export default AppStateReducer;
