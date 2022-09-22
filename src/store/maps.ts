import {ADD, DEL, incrementQuantity, decrementQuantity, moveSlideRight, moveSlideLeft, selectAttribute} from "./Action";

export const mapStateToProps = (props: any) => ({cart: props.cartReducer.products})

export const mapDispatchToProps = (dispatch: (x: any) => any) => ({
	add: (card: any) => dispatch(ADD(card)),
	incrementQuantity: (id: string) => dispatch(incrementQuantity(id)),
	decrementQuantity: (id: string) => dispatch(decrementQuantity(id)),
	moveRight: (id: string) => dispatch(moveSlideRight(id)),
	moveLeft: (id: string) => dispatch(moveSlideLeft(id)),
	selectItem: (product: string, attribute: string, item: string) => dispatch(selectAttribute(product, attribute, item)),
	del: (id: string) => dispatch(DEL(id))
})
