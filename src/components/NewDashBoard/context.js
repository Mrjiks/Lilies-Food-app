import React, { useState, useContext, useReducer, useEffect } from 'react';
import { cartdata } from './data';

import reducer from './reducer';

const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();

const initialState = {
	loading: false,
	cart: cartdata,
	total: 0,
	quantity: 0,
};

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	//Cart functionalties : Approach
	//1. Declear all functionalies in the contextAPI
	//2. Next dispatch an action using disptach method of useReducer() hook
	//3.Second, handle this action with reducer function

	const clearCart = () => {
		dispatch({ type: 'CLEAR_CART' });
	};

	const removeItem = id => {
		dispatch({ type: 'REMOVE', payload: id });
	};
	const increaseItem = id => {
		dispatch({ type: 'INCREASE', payload: id });
	};
	const decreaseItem = id => {
		dispatch({ type: 'DECREASE', payload: id });
	};
	useEffect(() => {
		dispatch({ type: 'GET_TOTALS' });
	}, [state.cart]);

	return (
		<AppContext.Provider
			value={{
				...state,
				clearCart,
				removeItem,
				increaseItem,
				decreaseItem,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
// custom hook for using the created context API
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
