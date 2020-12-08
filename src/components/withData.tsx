/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/display-name */
import { load } from 'api/api';
import { AppState } from 'context/AppStateContext.types';
import React, { useState } from 'react';

export const withData = (
  WrappedComponent: React.ComponentType<React.PropsWithChildren<{ initialState: AppState }>>
) => {
  return ({ children }: React.PropsWithChildren<Record<string, unknown>>) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | undefined>();
    const [initialState, setInitialState] = useState<AppState>({
      lists: [],
      draggedItem: undefined,
    });

    React.useEffect(() => {
      const fetchInitialState = async () => {
        try {
          const data = await load();
          setInitialState(data);
        } catch (e) {
          setError(e);
        }
        setIsLoading(false);
      };
      fetchInitialState();
    }, []);

    if (isLoading) {
      return <div>Loading</div>;
    }

    if (error) {
      return <div>{error.message}</div>;
    }

    return <WrappedComponent initialState={initialState}>{children}</WrappedComponent>;
  };
};
