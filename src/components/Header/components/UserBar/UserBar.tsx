import React, {Component} from 'react';
import {CartButton, CartCounter, FlexContainer} from "./styled";
import CustomSelect from "../../../CustomSelect/CustomSelect";
import CustomOption from "../../../CustomSelect/CustomOption";
import Cart from "../../../Cart/Cart";
import {getAllCurrencies} from "../../../../queries";

class UserBar extends Component<any> {
	state = {
		currentCurrency: this.props.data.currencies[0].symbol
	}
	handleChangeCurrency = (currentCurrency: number) => this.setState({currentCurrency})
	x = 1;
	render() {
		console.log('sdgdsgsd', this.props)
		return (
			<FlexContainer>
				<CustomSelect value={this.state.currentCurrency} onChange={this.handleChangeCurrency}>
					{this.props.data.currencies.map((currency:any) => (
						<CustomOption value={currency.symbol}>
							{currency.symbol + ' ' + currency.label}
						</CustomOption>
					))}
				</CustomSelect>
				<Cart value={this.state.currentCurrency} onChange={this.handleChangeCurrency}/>
			</FlexContainer>
		);
	}
}

export default getAllCurrencies(UserBar);
