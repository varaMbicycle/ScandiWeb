const initialState = {
	quantity: 0,
	products:[],
}

export const ADD_TO_CART = (state = initialState, action:any):any => {
	switch (action.type){
		case 'ADD_TO_CART':
			const currentProducts: any[] = state.products;
			currentProducts.push(action.payload);
			return {...state, quantity: state.quantity + 1, products: currentProducts}
		default:
			return state
	}
}

export const DEL_TO_CART = (state = initialState, action:any):any => {
	switch (action.type){
		case 'DEL_TO_CART':
			return {...state, quantity: state.quantity - 1}
		default:
			return state
	}
}
