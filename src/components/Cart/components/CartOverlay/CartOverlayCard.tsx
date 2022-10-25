import React, {Component} from 'react';
import {
	CartOverImgBlock,
	CartOverlayProductDescription, SmallCardCost, SmallCardDescription, StyledCartOverlayCard,
} from "./styled";
import CartOverlayCounter from "./CartOverlayCounter";
import {v4 as uuidv4} from "uuid";
import SelectionsItemsContainerCart from '../SelectionsItemsContainerCart';
import {IAttributes, IPrice} from "../../../../Interfaces";

class CartOverlayCard extends Component<any> {

	handleDelete = (event: any) => {
		this.props.onDelete(event.target.id)
	}

	render() {
		const currentCurrency = localStorage.getItem('currentCurrency');
		const {attributes} = this.props.product;
		const price = this.props.product.prices.find((price: IPrice) => price.currency.symbol === currentCurrency).amount;
		return (
			<StyledCartOverlayCard>
				<CartOverlayProductDescription>
					<SmallCardDescription>{this.props.product.name}</SmallCardDescription>
					<SmallCardCost>{currentCurrency}{price.toFixed(2)}</SmallCardCost>
					<SmallCardDescription>
						{!!attributes.length &&
							attributes.map((attribute: IAttributes, i: number, arr: IAttributes[]) => (
								<SelectionsItemsContainerCart
									selectItem={this.props.selectItem}
									attributes={arr[i]}
									product={this.props.product.id}
									item={arr[i].id}
									type={arr[i].type}
									key={uuidv4()}
								/>))}
					</SmallCardDescription>
				</CartOverlayProductDescription>
				<CartOverlayCounter
					onIncrement={this.props.onIncrement}
					onDecrement={this.props.onDecrement}
					value={this.props.product.quantity}
					id={this.props.product.id}
				/>
				<CartOverImgBlock>
					<img src={this.props.product.gallery[0]} alt={this.props.product.name}/>
				</CartOverImgBlock>
			</StyledCartOverlayCard>
		);
	}
}

export default CartOverlayCard;
