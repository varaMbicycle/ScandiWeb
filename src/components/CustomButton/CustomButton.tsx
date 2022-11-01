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
		const {color, handleClick, disabled, text} = this.props;
		return (
			<StyledCustomButton
				color={color}
				onClick={handleClick}
				disabled={disabled || false}
			>
				{text}
			</StyledCustomButton>
		);
	}
}

export default CustomButton;
