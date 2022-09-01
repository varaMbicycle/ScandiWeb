import React, {Component} from 'react';
import {CartButton, CartCounter, FlexContainer} from "./styled";
import CustomSelect from "../../../CustomSelect/CustomSelect";
import CustomOption from "../../../CustomSelect/CustomOption";
import Cart from "../../../Cart/Cart";

class UserBar extends Component {
	state = {
		currentCurrency: 1
	}
	handleChangeCurrency = (currentCurrency: number) => this.setState({currentCurrency})
	x = 1;
	render() {
		return (
			<FlexContainer>
				<CustomSelect value={this.state.currentCurrency} onChange={this.handleChangeCurrency}>
					<CustomOption value={1}>
						1
					</CustomOption>
					<CustomOption value={2}>
						2
					</CustomOption>
					<CustomOption value={3}>
						3
					</CustomOption>
				</CustomSelect>
				{/*<CartButton>*/}
				{/*	<img src={process.env.PUBLIC_URL + "/img/cart.svg"} alt="cart"/>*/}
				{/*	<CartCounter count={this.x}>{this.x}</CartCounter>*/}
				{/*</CartButton>*/}
				<Cart value={this.state.currentCurrency} onChange={this.handleChangeCurrency}/>
			</FlexContainer>
		);
	}
}

export default UserBar;
