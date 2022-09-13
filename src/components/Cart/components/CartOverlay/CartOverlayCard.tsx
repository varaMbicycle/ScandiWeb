import React, {Component} from 'react';
import {H5, H6} from '../../../../styled';
import {
	CartOverImgBlock,
	CartOverlayProductDescription, SmallCardCost, SmallCardDescription, StyledCartOverlayCard,
} from "./styled";
import SizeBlock from "./SizeBlock";
import CartOverlayCounter from "./CartOverlayCounter";

class CartOverlayCard extends Component<any> {
	constructor(props:any) {
		super(props);
	}
	render() {
		const currentCurrency = localStorage.getItem('currentCurrency');
		const price = this.props.product.prices.find((price: any) => price.currency.symbol === currentCurrency);
		return (
			<StyledCartOverlayCard>
				<CartOverlayProductDescription>
					<SmallCardDescription>{this.props.product.name}</SmallCardDescription>
					<SmallCardCost>{currentCurrency} {price.amount}</SmallCardCost>
					<SmallCardDescription>Size:</SmallCardDescription>
					<SizeBlock/>
					<SmallCardDescription>Color:</SmallCardDescription>
				</CartOverlayProductDescription>
				<CartOverlayCounter />
				<CartOverImgBlock>
					<img src={this.props.product.gallery[0]} alt={this.props.product.name}/>
				</CartOverImgBlock>
			</StyledCartOverlayCard>
		);
	}
}

export default CartOverlayCard;
