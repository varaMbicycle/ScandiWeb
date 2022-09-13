import React, {Component} from 'react';
import {CartButton, CartCounter} from "../Header/components/UserBar/styled";
import {CartBackground, CartContainer} from "./styled";
import Modal from "./Modal";
import CartOverlay from "./components/CartOverlay/CartOverlay";
import { connect } from "react-redux"
import {mapDispatchToProps, mapStateToProps} from "../../store/maps";


class Cart extends Component<any, any> {
	state: any = {
		isOpen: false,
		products:[]
	}


	handleOpen = () => {
		document.body.style.position = 'fixed';
		!this.state.isOpen && this.setState({isOpen: true})
	}
	handleClose = () => {
		document.body.style.position = 'static';
		this.setState({isOpen: false})
	}
	componentDidMount() {
		const products = this.props.cart.products.map((product:any)=>{
			return {
				quantity: 1,
				product: {...product}
			}
		});
		console.log(products)
		this.setState({...this.state, products: products})
	}

	render() {
		console.log(this.props);
		return (
			<CartContainer>
				<CartButton
					onClick={this.state.isOpen ? this.handleClose : this.handleOpen}
				>
					<img src={process.env.PUBLIC_URL + "/img/cart.svg"} alt="cart"/>
					<CartCounter count={this.props.cart.quantity}>{this.props.cart.quantity}</CartCounter>
				</CartButton>
				<Modal>
					<CartBackground isOpen={this.state.isOpen}>
						<CartOverlay products={this.props} handleClose={this.handleClose}/>
					</CartBackground>
				</Modal>
			</CartContainer>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
