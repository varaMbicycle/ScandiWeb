import React, {Component} from 'react';
import {H5, H4} from "../../../styled";
import {CardStyled} from "./styled";
import CustomButton from "../../CustomButton/CustomButton";

class Card extends Component {
	render() {
		return (
			<CardStyled>
				<img src={process.env.PUBLIC_URL + "/img/Image.png"} alt="card"/>
				<H5>Apollo Running Short</H5>
				<H4>$50.00</H4>
				<button><img src={process.env.PUBLIC_URL + "/img/cart-white.svg"} alt="cart"/></button>
			</CardStyled>
		);
	}
}

export default Card;
