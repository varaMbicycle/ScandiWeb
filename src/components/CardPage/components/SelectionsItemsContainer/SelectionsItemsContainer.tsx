import React, {Component, memo} from 'react';
import {StyledSelectionsItemsContainer, SwatchItem, TextItem} from "../../styled";
import {v4 as uuidv4} from "uuid";


class SelectionsItemsContainer extends Component<any, any> {
	constructor(props: any) {
		super(props);
	}
	handleChangeActiveItem = (event: any) => {
		if(this.props.handleChangeItem) {
			const attributes = this.props.attribute;
			console.log(attributes);
			const currentItemIndex = this.props.attribute.items.findIndex((product: any) => product.id === event.target.id)
			console.log(this.props.attribute.id, currentItemIndex);
			attributes.activeItem = currentItemIndex;
			// const currentAttributeIndex = product.attributes.findIndex((attribute : any) => this.props.attributes.id === attribute.id)
			// product.attributes[currentAttributeIndex].activeItem = currentItemIndex;
			this.props.handleChangeItem(attributes);
			return
		}else{
			this.props.selectItem(this.props.product,this.props.item, event.target.id);
		}

	}

	// componentDidMount() {
	// 	const attribute = this.props.attribute;
	// 	this.setState({...this.state, activeItem: attribute.items[0].id || ''})
	// }

	render() {
		const attribute = this.props.attributes;
		console.log(this.props);
		return (
			<>
				<h5>{attribute.name + ':'}</h5>
				<StyledSelectionsItemsContainer>
					{this.props.type === "text" ?
						attribute.items.map((item:any, i: number) => <TextItem
							onClick={this.handleChangeActiveItem}
							id={item.id}
							active={i === attribute.activeItem}
							key={uuidv4()}
						>
							{item.value}
						</TextItem>) :
						attribute.items.map((item:any, i: number) => <SwatchItem
							onClick={this.handleChangeActiveItem}
							color={item.value}
							active={i === this.props.attribute.activeItem}
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

export default memo(SelectionsItemsContainer);
