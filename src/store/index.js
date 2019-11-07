import React, { useReducer, useContext } from 'react';
import appReducer, { appInitialState } from 'store/reducers/appReducers';

const initialState = {
	app: appInitialState
};

const StoreContext = React.createContext();

const reducer = ({ app }, action) => ({
	app: appReducer(app, action),
});

/**
 * A React component that provides a store to the application
 * 
 * @param {Object} props - The React component props (used to render child components)
 */
export const StoreProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	
	return (
		<StoreContext.Provider value={{ state, dispatch }}>
			{ children }
		</StoreContext.Provider>
	);
};
  
/**
 * useStore will be used in React components to fetch and mutate state
 */
export const useStore = () => {
	const { state, dispatch } = useContext(StoreContext);
	return { state, dispatch };
};

