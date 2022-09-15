import React, {Component} from 'react';
import {connect} from "react-redux";
import {mapDispatchToProps, mapStateToProps} from "../../store/maps";
import {H2, H3, H5} from '../../styled';
import {CartPageContainer, CartPageResultBlock} from "./styled";
import {v4 as uuidv4} from "uuid";
import CartOverlayCard from "../Cart/components/CartOverlay/CartOverlayCard";
import CustomButton from "../CustomButton/CustomButton";
import ResultBlock from "./components/ResultBlock/ResultBlock";
import CartPageProduct from "./components/CartPageProduct/CartPageProduct";

class CartPage extends Component<any, any> {
	render() {
		console.log(this.props);
		const {cart} = this.props;
		const currentCurrency = localStorage.getItem('currentCurrency');
		if (!cart.length) {
			return <H2>Cart is empty</H2>
		}
		return (
			<CartPageContainer>
				<H3>CART</H3>
				<div>
					{cart.map((product: any) => (
						<>
							<hr/>
							<CartPageProduct
								product={product}
								onIncrement={this.props.incrementQuantity}
								onDecrement={this.props.decrementQuantity}
								key={uuidv4()}
							/>
						</>

					))}
				</div>
				<hr/>
				<ResultBlock cart={cart} currentCurrency={currentCurrency}/>
			</CartPageContainer>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
