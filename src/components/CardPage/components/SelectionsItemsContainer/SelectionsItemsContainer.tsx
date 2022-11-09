import React, {Component} from 'react';
import {StyledSelectionsItemsContainer, SwatchItem, TextItem} from "../../styled";
import {v4 as uuidv4} from "uuid";
import {IAttribute, IProduct} from "../../../../Interfaces";
import Loader from "../../../Loader/Loader";

class SelectionsItemsContainer extends Component<any> {
	constructor(props: any) {
		super(props);
	}

	handleChangeActiveItem = (event: any) => {
		const currentItemIndex = this.props.attributes.items.findIndex((item: IProduct) => {
			return item.id === event.target.id
		})
		this.props.handleChangeItem({id: this.props.attributes.id, index: currentItemIndex});
	}

	render() {
		const {attributes, type, active, isStock} = this.props;

		if (!attributes) return <Loader />
		return (
			<>
				<h5>{attributes.name + ':'}</h5>
				<StyledSelectionsItemsContainer>
					{type === "text" ?
						attributes.items.map((item: IAttribute, i: number) => <TextItem
							onClick={isStock ? this.handleChangeActiveItem : () => {}}
							id={item.id}
							active={active ? active === i : i === attributes.activeItem}
							key={uuidv4()}
							isStock={isStock}
						>
							{item.value}
						</TextItem>) :
						attributes.items.map((item: IAttribute, i: number) => <SwatchItem
							onClick={isStock ? this.handleChangeActiveItem : () => {}}
							color={item.value}
							id={item.id}
							active={active ? active === i : i === attributes.activeItem}
							key={uuidv4()}
							isStock={isStock}
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
