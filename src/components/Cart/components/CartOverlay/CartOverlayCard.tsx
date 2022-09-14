import React, {Component} from 'react';
import {
	CartOverImgBlock,
	CartOverlayProductDescription, SmallCardCost, SmallCardDescription, StyledCartOverlayCard,
} from "./styled";
import SizeBlock from "./SizeBlock";
import CartOverlayCounter from "./CartOverlayCounter";

class CartOverlayCard extends Component<any> {

	render() {
		const currentCurrency = localStorage.getItem('currentCurrency');
		const price = this.props.product.prices.find((price: any) => price.currency.symbol === currentCurrency).amount;
		return (
			<StyledCartOverlayCard>
				<CartOverlayProductDescription>
					<SmallCardDescription>{this.props.product.name}</SmallCardDescription>
					<SmallCardCost>{currentCurrency} {price}</SmallCardCost>
					<SmallCardDescription>Size:</SmallCardDescription>
					<SizeBlock/>
					<SmallCardDescription>Color:</SmallCardDescription>
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
