import React, {Component} from 'react';
import {connect} from "react-redux";
import {mapDispatchToProps, mapStateToProps} from "../../store/maps";
import {H2, H3, H5} from '../../styled';
import {CartPageContainer} from "./styled";
import {v4 as uuidv4} from "uuid";
import ResultBlock from "./components/ResultBlock/ResultBlock";
import CartPageProduct from "./components/CartPageProduct/CartPageProduct";

class CartPage extends Component<any, any> {

	render() {
		const {cart} = this.props;
		const currentCurrency = localStorage.getItem('currentCurrency');
		if (!cart.length) return <H2>Cart is empty</H2>
		return (
			<CartPageContainer>
				<H3>CART</H3>
				<div>
					{cart.map((product: any) => (
						<React.Fragment key={uuidv4()}>
							<hr/>
							<CartPageProduct
								product={product}
								onIncrement={this.props.incrementQuantity}
								onDecrement={this.props.decrementQuantity}
								moveLeft={this.props.moveLeft}
								moveRight={this.props.moveRight}
								selectItem={this.props.selectItem}
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
