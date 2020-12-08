import { save } from 'api/api';
import { withData } from 'components/withData';
import { createContext, PropsWithChildren, useContext, useEffect, useReducer } from 'react';
import { AppState, AppStateContextProps } from './AppStateContext.types';
import AppStateReducer from './AppStateReducer';

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

export const AppStateProvider = withData(
  ({ children, initialState }: PropsWithChildren<{ initialState: AppState }>): JSX.Element => {
    const [state, dispatch] = useReducer(AppStateReducer, initialState);

    useEffect(() => {
      save(state);
    }, [state]);

    return (
      <AppStateContext.Provider value={{ state, dispatch }}>{children}</AppStateContext.Provider>
    );
  }
);

export const useAppState = (): AppStateContextProps => {
  return useContext(AppStateContext);
};
