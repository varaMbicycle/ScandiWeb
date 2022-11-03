import React, {Component} from 'react';
import {v4 as uuidv4} from "uuid";
import {IAttribute} from "../../../../Interfaces";
import { StyledSelectionsItemsContainer, SwatchItemUnselected, TextItemUnselected } from '../../../CardPage/styled';
import Loader from "../../../Loader/Loader";


class AttributesContainer extends Component<any> {
	constructor(props: any) {
		super(props);
	}

	render() {

		const {attributes, type, active} = this.props;
		if(!attributes) return <Loader />
		return (
			<>
				<h5>{attributes.name + ':'}</h5>
				<StyledSelectionsItemsContainer>
					{type === "text" ?
						attributes.items.map((item: IAttribute, i: number) => <TextItemUnselected
							id={item.id}
							active={active ? active === i : i === attributes.activeItem}
							key={uuidv4()}
						>
							{item.value}
						</TextItemUnselected>) :
						attributes.items.map((item: IAttribute, i: number) => <SwatchItemUnselected
							color={item.value}
							id={item.id}
							active={active ? active === i : i === attributes.activeItem}
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
