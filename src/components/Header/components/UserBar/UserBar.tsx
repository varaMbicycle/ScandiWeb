import React, {Component} from 'react';
import { FlexContainer} from "./styled";
import CustomSelect from "../../../CustomSelect/CustomSelect";
import CustomOption from "../../../CustomSelect/CustomOption";
import Cart from "../../../Cart/Cart";
import {v4 as uuidv4} from "uuid";

class UserBar extends Component<any, any> {
	constructor(props:any) {
		super(props)
		this.state = {
			currentCurrency: localStorage.getItem('currentCurrency') || '$'
		}
	}

	handleChangeCurrency = (currentCurrency: string) => {
		localStorage.setItem('currentCurrency', currentCurrency);
		this.setState({currentCurrency})
		this.props.handleChangeCurrency(currentCurrency);
	}

	render() {
		const currencies = this.props.currencies || [];
		return (
			<FlexContainer>
				<CustomSelect value={this.state.currentCurrency} onChange={this.handleChangeCurrency}>
					{currencies.map((currency:any) => (
						<CustomOption value={currency.symbol} key={uuidv4()}>
							{currency.symbol + ' ' + currency.label}
						</CustomOption>
					))}
				</CustomSelect>
				<Cart value={this.state.currentCurrency} onChange={this.handleChangeCurrency}/>
			</FlexContainer>
		);
	}
}

export default UserBar;
