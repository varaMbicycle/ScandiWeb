import React, {Component, memo} from 'react';
import {StyledSelectionsItemsContainer, SwatchItem, TextItem} from "../../styled";
import {v4 as uuidv4} from "uuid";
import {IAttribute, IProduct} from "../../../../Interfaces";


class SelectionsItemsContainer extends Component<any> {
	constructor(props: any) {
		super(props);
	}

	handleChangeActiveItem = (event: any) => {
		if(this.props.handleChangeItem) {
			const attributes = this.props.attributes;
			const currentItemIndex = this.props.attributes.items.findIndex((product: IProduct) => product.id === event.target.id)
			attributes.activeItem = currentItemIndex;
			this.props.handleChangeItem({id: attributes.id, index: currentItemIndex});
		}
		// else{
		// 	this.props.selectItem(this.props.product,this.props.item, event.target.id);
		// }

	}

	render() {
		const attribute = this.props.attributes;
		return (
			<>
				<h5>{attribute.name + ':'}</h5>
				<StyledSelectionsItemsContainer>
					{this.props.type === "text" ?
						attribute.items.map((item: IAttribute, i: number) => <TextItem
							onClick={this.handleChangeActiveItem}
							id={item.id}
							active={this.props.active ? this.props.active === i : i === attribute.activeItem}
							key={uuidv4()}
						>
							{item.value}
						</TextItem>) :
						attribute.items.map((item: IAttribute, i: number) => <SwatchItem
							onClick={this.handleChangeActiveItem}
							color={item.value}
							id={item.id}
							active={this.props.active ? this.props.active === i : i === attribute.activeItem}
							key={uuidv4()}
						>
							<div id={item.id}></div>
						</SwatchItem>)
					}
				</StyledSelectionsItemsContainer>
			</>

		);
	}
}

export default SelectionsItemsContainer;
