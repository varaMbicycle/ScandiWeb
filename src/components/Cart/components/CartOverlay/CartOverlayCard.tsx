import React, {Component} from 'react';
import {
	CartOverImgBlock,
	CartOverlayProductDescription, SmallCardCost, SmallCardDescription, StyledCartOverlayCard,
} from "./styled";
import CartOverlayCounter from "./CartOverlayCounter";
import {v4 as uuidv4} from "uuid";
import SelectionsItemsContainerCart from '../SelectionsItemsContainerCart';

class CartOverlayCard extends Component<any> {

	render() {
		const currentCurrency = localStorage.getItem('currentCurrency');
		const {attributes} = this.props.product;
		const price = this.props.product.prices.find((price: any) => price.currency.symbol === currentCurrency).amount;
		console.log(attributes);
		return (
			<StyledCartOverlayCard>
				<CartOverlayProductDescription>
					<SmallCardDescription>{this.props.product.name}</SmallCardDescription>
					<SmallCardCost>{currentCurrency} {price}</SmallCardCost>
					<SmallCardDescription>
						{!!attributes.length &&
							attributes.map((attribute: any, i: number, arr: any) => (
								<SelectionsItemsContainerCart
									attributes={arr[i]}
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
