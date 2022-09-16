const initialState: { products: any[] } = {
	products: [],
}

export const cartReducer = (state = initialState, action: any): any => {
	console.log(state)
	switch (action.type) {
		case 'ADD_TO_CART':
			const product = state.products.find(({id}) => id === action.payload.id)
			if (!product) return {products: [...state.products, {...action.payload, quantity: 1}]}
			product.quantity += 1;
			return {products: [...state.products]}
		case 'INCREMENT_QUANTITY':
			state.products.find(({id}) => id === action.payload).quantity += 1;
			return {products: [...state.products]}
		case 'DECREMENT_QUANTITY':
			const elementToDecrease = state.products.find(({id}) => id === action.payload)
			if (elementToDecrease.quantity !== 1) {
				elementToDecrease.quantity -= 1;
				return {products: [...state.products]}
			}
			return {...state}
		default:
			return state
	}
}
