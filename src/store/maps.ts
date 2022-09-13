import {ADD, DEL} from "./Action";

export const mapStateToProps = (props: any)=> ({
	cart: props.ADD_TO_CART,
})

export const mapDispatchToProps = (dispatch: (x:any)=> any)=>{
	return {
		add: (card:any) => dispatch(ADD(card)),
		del: () => dispatch(DEL())
	}
}
