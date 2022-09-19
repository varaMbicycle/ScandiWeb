const initialState: { products: any[] } = {
	products: [],
}

export const cartReducer = (state = initialState, action: any): any => {
	switch (action.type) {
		case 'ADD_TO_CART':
			console.log('*** action.payload ***', action.payload);
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
		case 'SLIDE_TO_RIGHT':
			const elementToMoveSlideRight = state.products.find(({id}) => id === action.payload);
			if (elementToMoveSlideRight.activeImg < elementToMoveSlideRight.gallery.length - 1) elementToMoveSlideRight.activeImg += 1
			const newProductsRight = state.products.map((product: any) => product.id === action.payload.id ? elementToMoveSlideRight : product)
			return {...state, products: [...newProductsRight]}

		case 'SLIDE_TO_LEFT':
			const elementToMoveSlideLeft = state.products.find(({id}) => id === action.payload);
			if (elementToMoveSlideLeft.activeImg > 0) elementToMoveSlideLeft.activeImg -= 1
			const newProductsLeft = state.products.map((product: any) => product.id === action.payload.id ? elementToMoveSlideLeft : product)
			return {...state, products: [...newProductsLeft]}
		case 'SELECT_ATTRIBUTE':
			const currentProductIndex = state.products.findIndex((product: any) => product.id === action.payload.productId)
			const currentAttributeIndex = state.products[currentProductIndex].attributes.findIndex((product: any) => product.id === action.payload.attribute)
			const activeAttributeIndex = state.products[currentProductIndex].attributes[currentAttributeIndex].items.findIndex((product: any) => product.id === action.payload.item)
			const products = [...state.products];
			products[currentProductIndex].attributes[currentAttributeIndex].activeItem = activeAttributeIndex;
			return {...state, products}
		default:
			return state
	}
}
