import React, {Component} from 'react';
import {StyledSelectionsItemsContainer, SwatchItem, TextItem} from "../../styled";
import {v4 as uuidv4} from "uuid";
import {IAttribute, IProduct} from "../../../../Interfaces";


class SelectionsItemsContainer extends Component<any> {
	constructor(props: any) {
		super(props);
	}

	handleChangeActiveItem = (event: any) => {
		const currentItemIndex = this.props.attributes.items.findIndex((item: IProduct) => {
			return item.id === event.target.id
		})
		// this.props.attributes.activeItem = currentItemIndex;
		this.props.handleChangeItem({id: this.props.attributes.id, index: currentItemIndex});
	}

	render() {
		const {attributes} = this.props;
		return (
			<>
				<h5>{attributes.name + ':'}</h5>
				<StyledSelectionsItemsContainer>
					{this.props.type === "text" ?
						attributes.items.map((item: IAttribute, i: number) => <TextItem
							onClick={this.handleChangeActiveItem}
							id={item.id}
							active={this.props.active ? this.props.active === i : i === attributes.activeItem}
							key={uuidv4()}
						>
							{item.value}
						</TextItem>) :
						attributes.items.map((item: IAttribute, i: number) => <SwatchItem
							onClick={this.handleChangeActiveItem}
							color={item.value}
							id={item.id}
							active={this.props.active ? this.props.active === i : i === attributes.activeItem}
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
