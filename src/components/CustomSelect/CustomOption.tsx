import React, {Component} from 'react';
import {OptionStyled} from "../Header/components/UserBar/styled";
import {SelectContext} from "./CustomSelect";
interface IProps {
	value: any;
	children?: React.ReactNode;
}
class CustomOption extends Component<IProps> {
	static contextType = SelectContext;
	context: React.ContextType<typeof SelectContext> | undefined;

	handleChange = () => this.context && this.context(this.props.value)

	render() {
		return (
			<OptionStyled onClick={this.handleChange}>
				{this.props.children}
			</OptionStyled>
		);
	}
}

export default CustomOption;
