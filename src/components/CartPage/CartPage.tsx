import React, {Component} from 'react';
import {connect} from "react-redux";
import {mapDispatchToProps, mapStateToProps} from "../../store/maps";
import { H3 } from '../../styled';
import {CartPageContainer, Message} from "./styled";
import {v4 as uuidv4} from "uuid";
import ResultBlock from "./components/ResultBlock/ResultBlock";
import CartPageProduct from "./components/CartPageProduct/CartPageProduct";
import {IProduct} from "../../Interfaces";

class CartPage extends Component<any> {

	render() {
		const {cart, incrementQuantity, decrementQuantity, moveLeft, moveRight} = this.props;
		const currentCurrency = localStorage.getItem('currentCurrency');

		if (!cart.length) return <Message>Cart is empty</Message>
		return (
			<CartPageContainer>
				<H3>CART</H3>
				<div>
					{cart.map((product: IProduct) => (
						<React.Fragment key={uuidv4()}>
							<hr/>
							<CartPageProduct
								currentCurrency={localStorage.getItem('currentCurrency')}
								product={product}
								onIncrement={incrementQuantity}
								onDecrement={decrementQuantity}
								moveLeft={moveLeft}
								moveRight={moveRight}
							/>
						</React.Fragment>
					))}
				</div>
				<hr/>
				<ResultBlock cart={cart} currentCurrency={currentCurrency}/>
			</CartPageContainer>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
