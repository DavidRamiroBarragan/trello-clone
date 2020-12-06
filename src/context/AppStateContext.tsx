import { createContext, PropsWithChildren, useContext, useReducer } from 'react';
import { AppState, AppStateContextProps } from './AppStateContext.types';
import AppStateReducer from './AppStateReducer';

const appData: AppState = {
  lists: [
    {
      id: '0',
      text: 'TO DO',
      tasks: [{ id: 'c0', text: 'Generate app scaffold' }],
    },
    {
      id: '1',
      text: 'In Progress',
      tasks: [{ id: 'c2', text: 'Learn TypeScript' }],
    },
    {
      id: '2',
      text: 'Done',
      tasks: [{ id: 'c3', text: 'Begin to use static typing' }],
    },
  ],
  draggedItem: undefined,
};

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

// eslint-disable-next-line @typescript-eslint/ban-types
export const AppStateProvider = ({ children }: PropsWithChildren<{}>): JSX.Element => {
  const [state, dispatch] = useReducer(AppStateReducer, appData);
  return (
    <AppStateContext.Provider value={{ state, dispatch }}>{children}</AppStateContext.Provider>
  );
};

export const useAppState = (): AppStateContextProps => {
  return useContext(AppStateContext);
};
