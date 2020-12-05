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
  list: List[];
}

export interface AppStateContextProps {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}

export type Action =
  | { type: 'ADD_LIST'; payload: string }
  | { type: 'ADD_TASK'; paylload: { text: string; listId: string } };
