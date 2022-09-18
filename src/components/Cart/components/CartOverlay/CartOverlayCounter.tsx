import React, {Component} from 'react';
import { CartOverlayCounterBlock } from './styled';

class CartOverlayCounter extends Component<any, any> {


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
