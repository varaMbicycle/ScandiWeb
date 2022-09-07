import React, {Component} from 'react';
import {StyledSelectionsItemsContainer, SwatchItem, TextItem} from "../../styled";
import {v4 as uuidv4} from "uuid";

class SelectionsItemsContainer extends Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			activeItem: ''
		}
	}
	handleChangeActiveItem = (event: any) => {
		this.setState({...this.state, activeItem: event.target.id})
	}

	componentDidMount() {
		const i = this.props.type === 'text'? 1:0;
		this.setState({...this.state, activeItem: this.props.attributes[i].items[0].id || ''})
	}

	render() {
		console.log(this.props.attributes[0].items[0].id);
		const attribute = this.props.attributes.find((item: any) => item.type === this.props.type)
		return (
			<>
				<h5>{attribute.name + ':'}</h5>
				<StyledSelectionsItemsContainer>
					{this.props.type === "text" ?
						attribute.items.map((item:any) => <TextItem
							onClick={this.handleChangeActiveItem}
							id={item.id}
							active={item.id === this.state.activeItem}
							key={uuidv4()}
						>
							{item.displayValue}
						</TextItem>) :
						attribute.items.map((item:any) => <SwatchItem
							onClick={this.handleChangeActiveItem}
							color={item.value}
							active={item.id === this.state.activeItem}
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
