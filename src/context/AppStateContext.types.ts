import { DragItem } from 'types/DragItem';

export interface Task {
  id: string;
  text: string;
}

export interface List {
  id: string;
  text: string;
  tasks: Task[];
}

export interface AppState {
  lists: List[];
  draggedItem: DragItem | undefined;
}

export interface AppStateContextProps {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}

export type Action =
  | { type: 'ADD_LIST'; payload: string }
  | { type: 'ADD_TASK'; paylload: { text: string; listId: string } }
  | {
      type: 'MOVE_LIST';
      payload: {
        dragIndex: number;
        hoverIndex: number;
      };
    }
  | {
      type: 'SET_DRAGGE_ITEM';
      payload: DragItem | undefined;
    }
  | {
      type: 'MOVE_TASK';
      payload: {
        dragIndex: number;
        hoverIndex: number;
        sourceColumn: string;
        targetColumn: string;
      };
    };
