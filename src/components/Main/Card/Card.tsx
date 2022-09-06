import React, {Component} from 'react';
import {H5, H4} from "../../../styled";
import {CardStyled} from "./styled";
import {NavLink} from "react-router-dom";

class Card extends Component<any> {
	constructor(props: any) {
		super(props);
	}
	handleAddToBasket = (event: React.MouseEvent): void=>{
		event.preventDefault();
		console.log('Added')
	}
	render() {
		const currentCurrency = localStorage.getItem('currentCurrency');
		const prices = this.props.card.prices;
		const price = prices.find((el: any) => el.currency.symbol === currentCurrency)
		console.log(price);
		return (
			<CardStyled inStock={this.props.card.inStock}>
				<p></p>
				<NavLink to='product'>
					<div>
						<div>{!this.props.card.inStock && 'OUT OF STOCK'}</div>
						<img src={this.props.card.gallery[0]} width={300} alt="card"/>
					</div>
					<H5>{this.props.card.name}</H5>
					<H4>{price.currency.symbol + ' ' + price.amount}</H4>
					{this.props.card.inStock &&
						<button onClick={this.handleAddToBasket}>
							<img src={process.env.PUBLIC_URL + "/img/cart-white.svg"} alt="cart"/>
						</button>}
				</NavLink>
			</CardStyled>
		);
	}
}

export default Card;
