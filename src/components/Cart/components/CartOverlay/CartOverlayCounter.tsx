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
		const {id, value, onIncrement, onDecrement} = this.props;
		return (
			<CartOverlayCounterBlock>
				<button id={id} onClick={() => onIncrement(id)}>+</button>
				<div>{value}</div>
				<button id={id} onClick={() => onDecrement(id)}>-</button>
			</CartOverlayCounterBlock>
		);
	}
}

export default CartOverlayCounter;
