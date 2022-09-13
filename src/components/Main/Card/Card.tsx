import React, {Component} from 'react';
import {H5, H4} from "../../../styled";
import {CardStyled} from "./styled";
import {NavLink} from "react-router-dom";
import { connect } from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from "../../../store/maps";

class Card extends Component<any> {
	constructor(props: any) {
		super(props);
	}

	handleAddToBasket = (event: React.MouseEvent): void=>{
		event.preventDefault();
		this.props.add(this.props.card);
	}

	render() {
		const currentCurrency = localStorage.getItem('currentCurrency');
		const prices = this.props.card.prices;
		const price = prices.find((el: any) => el.currency.symbol === currentCurrency)
		const {inStock,id, name, gallery } = this.props.card;
		if(!this.props.card.prices) return <div>Loading...</div>
		return (
			<CardStyled inStock={inStock}>
				<p></p>
				<NavLink to={id}>
					<div>
						<div>{!inStock && 'OUT OF STOCK'}</div>
						<img src={gallery[0]} width={300} alt="card"/>
					</div>
					<H5>{name}</H5>
					<H4>{price.currency.symbol + ' ' + price.amount}</H4>
					{inStock &&
						<button onClick={this.handleAddToBasket}>
							<img src={process.env.PUBLIC_URL + "/img/cart-white.svg"} alt="cart"/>
						</button>}
				</NavLink>
			</CardStyled>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
