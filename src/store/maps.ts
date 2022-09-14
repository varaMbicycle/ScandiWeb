import {ADD, DEL, incrementQuantity, decrementQuantity} from "./Action";

export const mapStateToProps = (props: any) => ({cart: props.cartReducer.products})

export const mapDispatchToProps = (dispatch: (x: any) => any) => ({
	add: (card: any) => dispatch(ADD(card)),
	incrementQuantity: (id: string) => dispatch(incrementQuantity(id)),
	decrementQuantity: (id: string) => dispatch(decrementQuantity(id)),
	del: () => dispatch(DEL())
})
