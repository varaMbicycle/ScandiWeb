import React, {Component} from 'react';
import {v4 as uuidv4} from "uuid";
import {
	StyledSelectionsItemsContainerCart,
	SwatchItemCartNoLive,
	TextItemCartNoLive
} from "./CartOverlay/styled";
import {IAttributes} from "../../../Interfaces";
import Loader from "../../Loader/Loader";

class ItemsContainerCart extends Component<any> {

	render() {
		const {attributes, type} = this.props;

		if(!attributes) return <Loader />
		return (
			<>
				<h5>{attributes.name + ':'}</h5>
				<StyledSelectionsItemsContainerCart>
					{type === "text" ?
						attributes.items.map((item: IAttributes, i: number) => <TextItemCartNoLive
							id={item.id}
							active={i === this.props.attributes.activeItem}
							key={uuidv4()}
						>
							{item.value}
						</TextItemCartNoLive>) :
						attributes.items.map((item: any, i: number) => <SwatchItemCartNoLive
							color={item.value}
							active={i === attributes.activeItem}
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
