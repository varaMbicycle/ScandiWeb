import React, {Component, memo} from 'react';
import {v4 as uuidv4} from "uuid";
import {StyledSelectionsItemsContainerCart, SwatchItemCart, TextItemCart} from "./CartOverlay/styled";

class SelectionsItemsContainerCart extends Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			activeItem: ''
		}
	}
	handleChangeActiveItem = (event: any) => {
		this.setState({...this.state, activeItem: event.target.id})
	}

	componentDidMount() {
		const attribute = this.props.attributes;
		this.setState({...this.state, activeItem: attribute.items[0].id || ''})
	}

	render() {
		const attribute = this.props.attributes;
		return (
			<>
				<h5>{attribute.name + ':'}</h5>
				<StyledSelectionsItemsContainerCart>
					{this.props.type === "text" ?
						attribute.items.map((item:any) => <TextItemCart
							onClick={this.handleChangeActiveItem}
							id={item.id}
							active={item.id === this.state.activeItem}
							key={uuidv4()}
						>
							{item.value}
						</TextItemCart>) :
						attribute.items.map((item:any) => <SwatchItemCart
							onClick={this.handleChangeActiveItem}
							color={item.value}
							active={item.id === this.state.activeItem}
							key={uuidv4()}
						>
							<div id={item.id}></div>
						</SwatchItemCart>)
					}
				</StyledSelectionsItemsContainerCart>
			</>

		);
	}
}

export default memo(SelectionsItemsContainerCart);
