import React, {Component} from 'react';
import {H5} from "../../../../styled";
import CustomButton from "../../../CustomButton/CustomButton";
import {CartPageResultBlock} from "../../styled";

class ResultBlock extends Component<any> {
	render() {
		const {currentCurrency} = this.props;
		const {cart} = this.props;
		const total = cart.reduce((quantity: number, product: any) => {
			const amount = product.prices.find((price: any) => price.currency.symbol === currentCurrency).amount;
			return quantity += amount;
		}, 0);
		const tax = (total * 0.21);
		const quantity = cart.reduce((quantity: number, product: any) => (
			quantity += product.quantity
		), 0)
		return (
			<CartPageResultBlock>
				<H5>Tax 21%: <span>{currentCurrency} {tax.toFixed(2)}</span></H5>
				<H5>Quantity:
					<span>
							{quantity}
						</span>
				</H5>
				<H5>Total: <span>{currentCurrency} {total.toFixed(2)}</span></H5>
				<CustomButton color='secondary' text='ORDER' handleClick={() => console.log('order')}/>
			</CartPageResultBlock>
		);
	}
}

export default ResultBlock;
