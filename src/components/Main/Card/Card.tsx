import React, {Component} from 'react';
import {H5, H4} from "../../../styled";
import {CardStyled} from "./styled";
import CustomButton from "../../CustomButton/CustomButton";

class Card extends Component<any> {
	constructor(props: any) {
		super(props);
	}
	render() {
		console.log(this.props.card)
		return (
			<CardStyled>
				<img src={this.props.card.gallery[0]} width={300} alt="card"/>
				<H5>{this.props.card.name}</H5>
				<H4>{this.props.card.prices[0].amount}</H4>
				<button><img src={process.env.PUBLIC_URL + "/img/cart-white.svg"} alt="cart"/></button>
			</CardStyled>
		);
	}
}

export default Card;
