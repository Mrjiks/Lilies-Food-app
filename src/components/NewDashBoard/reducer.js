const reducer = (state, action) => {
	if (action.type === 'CLEAR_CART') {
		return { ...state, cart: [] }; //returns old state and modifies only the cart property, in this case, to an empty array
	}
	if (action.type === 'REMOVE') {
		return {
			...state,
			cart: state.cart.filter(cartItem => cartItem.id !== action.payload),
		};
	}

	// Increase quantity of an item
	if (action.type === 'INCREASE') {
		let tempCart = state.cart.map(cartItem => {
			if (cartItem.id === action.payload) {
				return { ...cartItem, quantity: cartItem.quantity + 1 };
			}
			return cartItem;
		});
		return { ...state, cart: tempCart };
	}
	/////////////////////////////////////////////////////
	//Decrease quantity of an item
	if (action.type === 'DECREASE') {
		let tempCart = state.cart
			.map(cartItem => {
				if (cartItem.id === action.payload) {
					return { ...cartItem, quantity: cartItem.quantity - 1 };
				}
				return cartItem;
			})
			.filter(cartItem => cartItem.quantity !== 0); //The chained filter method ensures no item with a zero or a negative quantity
		return { ...state, cart: tempCart };
	}
	/////////////////////////////////////////////////////
	//Get totals
	if (action.type === 'GET_TOTALS') {
		let { total, quantity } = state.cart.reduce(
			(cartTotal, cartItem) => {
				const { price, quantity } = cartItem;
				const itemTotal = price * quantity;
				cartTotal.total += itemTotal;
				cartTotal.quantity += quantity;
				return cartTotal;
			},

			{
				total: 0,
				quantity: 0,
			},
		);

		total = parseFloat(total.toFixed(2));

		return { ...state, total, quantity };
	}
	//////////////////////////////////////////////////////
	//Default useReducer return state value
	return state;
};

export default reducer;
