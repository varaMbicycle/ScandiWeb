import React, {Component} from 'react';
import {v4 as uuidv4} from "uuid";
import {IAttribute} from "../../../../Interfaces";
import { StyledSelectionsItemsContainer, SwatchItemUnselected, TextItemUnselected } from '../../../CardPage/styled';


class AttributesContainer extends Component<any> {
	constructor(props: any) {
		super(props);
	}

	render() {
		const attribute = this.props.attributes;
		return (
			<>
				<h5>{attribute.name + ':'}</h5>
				<StyledSelectionsItemsContainer>
					{this.props.type === "text" ?
						attribute.items.map((item: IAttribute, i: number) => <TextItemUnselected
							id={item.id}
							active={this.props.active ? this.props.active === i : i === attribute.activeItem}
							key={uuidv4()}
						>
							{item.value}
						</TextItemUnselected>) :
						attribute.items.map((item: IAttribute, i: number) => <SwatchItemUnselected
							color={item.value}
							id={item.id}
							active={this.props.active ? this.props.active === i : i === attribute.activeItem}
							key={uuidv4()}
						>
							<div id={item.id}></div>
						</SwatchItemUnselected>)
					}
				</StyledSelectionsItemsContainer>
			</>

		);
	}
}

export default AttributesContainer;
