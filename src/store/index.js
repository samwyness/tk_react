import React, { useReducer, useContext } from 'react';
import appReducer, { appInitialState } from 'store/reducers/appReducers';

const initialState = {
  app: appInitialState,
};

const StoreContext = React.createContext(initialState);

const reducer = ({ app }, action) => ({
  app: appReducer(app, action),
});

/**
 * A React component that provides a store to the application
 *
 * @param {Object} props - The React component props (used to render child components)
 */
const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
export default StoreProvider;
