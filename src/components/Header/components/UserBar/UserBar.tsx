import React, {Component} from 'react';
import { FlexContainer} from "./styled";
import CustomSelect from "../../../CustomSelect/CustomSelect";
import CustomOption from "../../../CustomSelect/CustomOption";
import Cart from "../../../Cart/Cart";
import {v4 as uuidv4} from "uuid";
import {ICurrency} from "../../../../Interfaces";
import {getCurrencies} from "../../../../queries";

interface IState {
	currentCurrency: string
}

class UserBar extends Component<any, IState> {
	constructor(props:any) {
		super(props)
		this.state = {
			currentCurrency: localStorage.getItem('currentCurrency') || '$'
		}
	}

	handleChangeCurrency = (currentCurrency: string) => {
		localStorage.setItem('currentCurrency', currentCurrency);
		this.setState({...this.state, currentCurrency})
	}

	render() {
		const {currencies} = this.props.data;
		if(!currencies) return <div>Loading...</div>
		return (
			<FlexContainer>
				<CustomSelect
					value={this.state.currentCurrency}
					onChange={this.handleChangeCurrency}
				>
					{currencies.map((currency: ICurrency) => (
						<CustomOption value={currency.symbol} key={uuidv4()}>
							{currency.symbol + ' ' + currency.label}
						</CustomOption>
					))}
				</CustomSelect>
				<Cart value={this.state.currentCurrency} onClick={this.handleChangeCurrency}/>
			</FlexContainer>
		);
	}
}

export default getCurrencies(UserBar);
