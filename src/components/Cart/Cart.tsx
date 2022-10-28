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

	dropDownRef = React.createRef<HTMLDivElement>();
	clickOutside = (event: MouseEvent) => {

		if (this.state.isOpen && this.dropDownRef.current && !this.dropDownRef.current.contains(event.target as Node)) {
			this.handleClose()
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
		document.addEventListener("mousedown", this.clickOutside)
		pushToLocalStorage(this.props.cart);
	}
	componentWillUnmount() {
		document.removeEventListener("mousedown", this.clickOutside)
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
							ref={this.dropDownRef}
						/>
					</CartBackground>
				</Modal>
			</CartContainer>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
