import React, {Component} from 'react';
import {StyledCustomButton} from "./styled";

interface ICustomButton {
	color: string
	text: string
	handleClick: ()=> void
}
class CustomButton extends Component<ICustomButton> {
	constructor(props:ICustomButton) {
		super(props);
	}
	render() {
		return (
			<StyledCustomButton color={this.props.color} onClick={this.props.handleClick}>
				{this.props.text}
			</StyledCustomButton>
		);
	}
}

export default CustomButton;
