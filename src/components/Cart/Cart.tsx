import React, {Component} from 'react';
import {CartButton, CartCounter} from "../Header/components/UserBar/styled";
import {CartBackground, CartContainer} from "./styled";
import Modal from "./Modal";
import CartOverlay from "./components/CartOverlay/CartOverlay";
import { connect } from "react-redux"
import {mapDispatchToProps, mapStateToProps} from "../../store/maps";
import {pushToLocalStorage} from "../../utils/utils";

interface IState {
	isOpen: boolean
}

class Cart extends Component<any, IState> {
	constructor(props: any) {
		super(props);
		this.state = {
			isOpen: false
		}
	}

	handleOpen = () => {
		document.body.style.position = 'fixed';
		document.body.style.right = '8px';
		!this.state.isOpen && this.setState({isOpen: true})
	}
	handleClose = () => {

		this.setState({isOpen: false})
		document.body.style.position = 'static';
	}
	componentDidMount() {
		pushToLocalStorage(this.props.cart);
	}
	componentDidUpdate() {
		pushToLocalStorage(this.props.cart);
	}

	render() {
		const count = this.props.cart.reduce((count: number, product: any) => {
			count += product.quantity;
			return count
		} , 0);

		return (
			<CartContainer>
				<CartButton
					onClick={this.handleOpen}
				>
					<img src={process.env.PUBLIC_URL + "/img/cart.svg"} alt="cart"/>
					<CartCounter count={this.props.cart.length}>{count}</CartCounter>
				</CartButton>
				<Modal>
					<CartBackground isOpen={this.state.isOpen}>
						<CartOverlay
							products={this.props.cart}
							currentCurrency={this.props.value}
							handleClose={this.handleClose}
							onIncrement={this.props.incrementQuantity}
							onDecrement={this.props.decrementQuantity}
							onDelete={this.props.del}
							selectItem={this.props.selectItem}
						/>
					</CartBackground>
				</Modal>
			</CartContainer>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
