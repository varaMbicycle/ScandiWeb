import React, {Component} from 'react';
import { CartOverlayCounterBlock } from './styled';

interface IProps {
	id: string;
	value: number;
	onDecrement: (id: string)=> void;
	onIncrement: (id: string)=> void;
}

class CartOverlayCounter extends Component<IProps> {


	render() {
		return (
			<CartOverlayCounterBlock>
				<button id={this.props.id} onClick={() => this.props.onIncrement(this.props.id)}>+</button>
				<div>{this.props.value}</div>
				<button id={this.props.id} onClick={() => this.props.onDecrement(this.props.id)}>-</button>
			</CartOverlayCounterBlock>
		);
	}
}

export default CartOverlayCounter;
