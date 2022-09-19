import React, {Component, memo} from 'react';
import {v4 as uuidv4} from "uuid";
import {StyledSelectionsItemsContainerCart, SwatchItemCart, TextItemCart} from "./CartOverlay/styled";

class SelectionsItemsContainerCart extends Component<any, any> {
	constructor(props: any) {
		super(props);
	}

	handleChangeActiveItem = (event: any) => {
		this.props.selectItem(this.props.product,this.props.item, event.target.id);
	}

	render() {
		const attribute = this.props.attributes;
		return (
			<>
				<h5>{attribute.name + ':'}</h5>
				<StyledSelectionsItemsContainerCart>
					{this.props.type === "text" ?
						attribute.items.map((item:any, i: number) => <TextItemCart
							onClick={this.handleChangeActiveItem}
							id={item.id}
							active={i === this.props.attributes.activeItem}
							key={uuidv4()}
						>
							{item.value}
						</TextItemCart>) :
						attribute.items.map((item:any, i: number) => <SwatchItemCart
							onClick={this.handleChangeActiveItem}
							color={item.value}
							active={i === this.props.attributes.activeItem}
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
