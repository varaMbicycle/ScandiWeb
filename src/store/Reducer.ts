import { IProduct } from "../Interfaces";

const initialState: { products: any[], currency: string } = {
	products: JSON.parse(localStorage.getItem('cart') || '[]'),
	currency: localStorage.getItem('currentCurrency') || '',
}

export const cartReducer = (state = initialState, action: any): { products: IProduct[], currency: string } => {
	switch (action.type) {
		case 'ADD_TO_CART':
			const equalProducts = state.products.filter(({name}) => {
				return name === action.payload.name
			})
			let targetProduct;
			if(equalProducts.length){
				targetProduct = equalProducts.find((product: IProduct) => {
					return JSON.stringify(product.attributes) === JSON.stringify(action.payload.attributes)
				})
			}
			if (!targetProduct?.id) return {...state, products: [...state.products, {...action.payload, quantity: 1}]}
			targetProduct.quantity += 1;
			return {...state, products: [...state.products]}
		case 'INCREMENT_QUANTITY':
			state.products.find(({id}) => id === action.payload).quantity += 1;
			return {...state, products: [...state.products]}
		case 'DECREMENT_QUANTITY':
			const elementToDecrease = state.products.find(({id}) => id === action.payload)
			if (elementToDecrease?.quantity !== 1) {
				elementToDecrease.quantity -= 1;
				return {...state, products: [...state.products]}
			} else{
				const productsAfterDelete = state.products.filter((product: IProduct) => product.id !== action.payload)
				return {...state, products: [...productsAfterDelete]}
			}
		case 'SLIDE_TO_RIGHT':
			const elementToMoveSlideRight = state.products.find(({id}) => id === action.payload);
			if (elementToMoveSlideRight?.activeImg < elementToMoveSlideRight?.gallery.length - 1) elementToMoveSlideRight.activeImg += 1
			const newProductsRight = state.products.map((product: IProduct) => product.id === action.payload.id ? elementToMoveSlideRight : product)
			return {...state, products: [...newProductsRight]}

		case 'SLIDE_TO_LEFT':
			const elementToMoveSlideLeft = state.products.find(({id}) => id === action.payload);
			if (elementToMoveSlideLeft.activeImg > 0) elementToMoveSlideLeft.activeImg -= 1
			const newProductsLeft = state.products.map((product: IProduct) => product.id === action.payload.id ? elementToMoveSlideLeft : product)
			return {...state, products: [...newProductsLeft]}
		case 'SELECT_ATTRIBUTE':
			const currentProductIndex = state.products.findIndex((product: IProduct) => product.id === action.payload.productId)
			const currentAttributeIndex = state.products[currentProductIndex].attributes.findIndex((product: IProduct) => product.id === action.payload.attribute)
			const activeAttributeIndex = state.products[currentProductIndex].attributes[currentAttributeIndex].items.findIndex((product: IProduct) => product.id === action.payload.item)
			const products = [...state.products];
			products[currentProductIndex].attributes[currentAttributeIndex].activeItem = activeAttributeIndex;
			return {...state, products}
		case 'SET_CURRENCY' :
			return {...state, currency: action.payload}
		default:
			return state
	}
}
