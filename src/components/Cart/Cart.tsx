import React, {Component} from 'react';
import {CartButton, CartCounter} from "../Header/components/UserBar/styled";
import {CartBackground, CartContainer} from "./styled";
import Modal from "./Modal";
import CartOverlay from "./components/CartOverlay/CartOverlay";

interface IProps {
	value: any;
	onChange: (value: any) => void;
	children?: React.ReactNode;
}

interface IState {
	isOpen: boolean;
}

class Cart extends Component<IProps, IState> {
	state: IState = {
		isOpen: false
	}

	// dropDownRef = React.createRef<HTMLDivElement>();
	// backgroundRef = React.createRef<HTMLDivElement>();

	handleOpen = () => {
		document.body.style.position = 'fixed';
		!this.state.isOpen && this.setState({isOpen: true})
	}
	handleClose = () => {
		document.body.style.position = 'static';
		this.setState({isOpen: false})
	}

	render() {
		return (
			<CartContainer>
				<CartButton
					onClick={this.state.isOpen ? this.handleClose : this.handleOpen}
				>
					<img src={process.env.PUBLIC_URL + "/img/cart.svg"} alt="cart"/>
					<CartCounter count={1}>{1}</CartCounter>
				</CartButton>
				<Modal>
					<CartBackground isOpen={this.state.isOpen}>
						<CartOverlay handleClose={this.handleClose}/>
					</CartBackground>
				</Modal>
			</CartContainer>
		);
	}
}

export default Cart;
