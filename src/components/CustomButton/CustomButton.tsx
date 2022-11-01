import React, {Component} from 'react';
import {StyledCustomButton} from "./styled";

interface ICustomButton {
	color: string
	text: string
	handleClick: (event: any)=> void
	disabled?: boolean
}
class CustomButton extends Component<ICustomButton> {
	constructor(props:ICustomButton) {
		super(props);
	}
	render() {
		return (
			<StyledCustomButton color={this.props.color} onClick={this.props.handleClick} disabled={this.props.disabled || false}>
				{this.props.text}
			</StyledCustomButton>
		);
	}
}

export default CustomButton;
