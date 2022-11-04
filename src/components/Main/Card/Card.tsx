import React, {Component} from 'react';
import {H5, H4} from "../../../styled";
import {CardStyled} from "./styled";
import {NavLink} from "react-router-dom";
import { connect } from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from "../../../store/maps";
import {changeProductForBasket} from "../../../utils/utils";
import {IPrice} from "../../../Interfaces";
import Loader from "../../Loader/Loader";

class Card extends Component<any> {

	handleAddToBasket = (event: React.MouseEvent): void=>{
		event.preventDefault();
		this.props.add(changeProductForBasket(this.props.card));
	}

	render() {
		const {inStock,id, name, gallery, brand, prices } = this.props.card;
		const currentCurrency = localStorage.getItem('currentCurrency');
		const price = prices.find((el: IPrice) => el.currency.symbol === currentCurrency)
		if(!prices) return <Loader />
		return (
			<CardStyled inStock={inStock}>
				<NavLink to={id}>
					<div>
						<div>{!inStock && 'OUT OF STOCK'}</div>
						<img src={gallery[0]} width={300} alt="card"/>
					</div>
					<H5>{brand} {name}</H5>
					<H4>{price.currency.symbol + price.amount.toFixed(2)}</H4>
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
