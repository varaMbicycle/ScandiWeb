import React, {Component} from 'react';
import {v4 as uuidv4} from "uuid";
import {StyledSelectionsItemsContainerCart, SwatchItemCart, TextItemCart} from "./CartOverlay/styled";
import {IAttributes} from "../../../Interfaces";
import Loader from "../../Loader/Loader";

class SelectionsItemsContainerCart extends Component<any> {

	handleChangeActiveItem = (event: any) => {
		this.props.selectItem(this.props.product,this.props.item, event.target.id);
	}

	render() {
		const {attributes, type} = this.props;

		if(!attributes) return <Loader />
		return (
			<>
				<h5>{attributes.name + ':'}</h5>
				<StyledSelectionsItemsContainerCart>
					{type === "text" ?
						attributes.items.map((item: IAttributes, i: number) => <TextItemCart
							onClick={this.handleChangeActiveItem}
							id={item.id}
							active={i === attributes.activeItem}
							key={uuidv4()}
						>
							{item.value}
						</TextItemCart>) :
						attributes.items.map((item: any, i: number) => <SwatchItemCart
							onClick={this.handleChangeActiveItem}
							color={item.value}
							active={i === attributes.activeItem}
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

export default SelectionsItemsContainerCart;
