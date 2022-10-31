import React, {Component} from 'react';
import {v4 as uuidv4} from "uuid";
import {
	StyledSelectionsItemsContainerCart,
	SwatchItemCartNoLive,
	TextItemCartNoLive
} from "./CartOverlay/styled";
import {IAttributes} from "../../../Interfaces";

class ItemsContainerCart extends Component<any> {

	render() {
		const attribute = this.props.attributes;
		return (
			<>
				<h5>{attribute.name + ':'}</h5>
				<StyledSelectionsItemsContainerCart>
					{this.props.type === "text" ?
						attribute.items.map((item: IAttributes, i: number) => <TextItemCartNoLive
							id={item.id}
							active={i === this.props.attributes.activeItem}
							key={uuidv4()}
						>
							{item.value}
						</TextItemCartNoLive>) :
						attribute.items.map((item: any, i: number) => <SwatchItemCartNoLive
							color={item.value}
							active={i === this.props.attributes.activeItem}
							key={uuidv4()}
						>
							<div id={item.id}></div>
						</SwatchItemCartNoLive>)
					}
				</StyledSelectionsItemsContainerCart>
			</>

		);
	}
}

export default ItemsContainerCart;
