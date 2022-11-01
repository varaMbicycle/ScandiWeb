import React, {Component} from 'react';
import {CartButton, CartCounter} from "../Header/components/UserBar/styled";
import {CartBackground, CartContainer} from "./styled";
import Modal from "./Modal";
import CartOverlay from "./components/CartOverlay/CartOverlay";
import {connect} from "react-redux"
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

	dropDownRef = React.createRef<any>();

	clickOutside = (event: MouseEvent) => {
		if (this.state.isOpen && this.dropDownRef.current && !this.dropDownRef.current.contains(event.target as Node) || event.target === this.dropDownRef.current ) {
			this.handleClose(event)
		}
	}

	changeStyles = () => {
		if (document.body.clientHeight - document.documentElement.clientHeight) {
			if (!this.state.isOpen) {
				document.body.style.position = 'static';
				document.body.style.overflow = 'auto';
				document.body.style.paddingRight = '0';
			} else {
				document.body.style.overflow = 'hidden';
				document.body.style.position = 'fixed';
				document.body.style.paddingRight = '17px';
			}
		}
	}

	handleOpen = (event: any) => {
		!this.state.isOpen && this.setState({isOpen: true})
		setTimeout(this.changeStyles, 0);
		event.stopPropagation();
	}
	handleClose = (event: any) => {
		this.setState({isOpen: false})
		setTimeout(this.changeStyles, 500);

		event.stopPropagation();
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
		}, 0);
		return (
			<CartContainer>
				<CartButton	onMouseDown={this.handleOpen}>
					<img src={process.env.PUBLIC_URL + "/img/cart.svg"} alt="cart"/>
					<CartCounter count={this.props.cart.length}>{count}</CartCounter>
				</CartButton>
				<Modal>
					<CartBackground isOpen={this.state.isOpen} ref={this.dropDownRef}>
						<CartOverlay
							products={this.props.cart}
							currentCurrency={this.props.value}
							handleClose={this.handleClose}
							onIncrement={this.props.incrementQuantity}
							onDecrement={this.props.decrementQuantity}
							onDelete={this.props.del}
							selectItem={this.props.selectItem}
							clickOutside={this.clickOutside}
						/>
					</CartBackground>
				</Modal>
			</CartContainer>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
