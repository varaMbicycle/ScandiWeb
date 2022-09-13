import React, {Component} from 'react';
import { CartOverlayCounterBlock } from './styled';

class CartOverlayCounter extends Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			count: 1
		}
	}
	decrement = () => {
		if(this.state.count > 1) this.setState({...this.state, count: this.state.count - 1})
	}
	increment = () => {
		this.setState({...this.state, count: this.state.count + 1})
	}
	render() {
		return (
			<CartOverlayCounterBlock>
				<button onClick={this.increment}>+</button>
				<div>{this.state.count}</div>
				<button onClick={this.decrement}>-</button>
			</CartOverlayCounterBlock>
		);
	}
}

export default CartOverlayCounter;
