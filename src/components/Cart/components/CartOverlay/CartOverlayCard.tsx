import React, {Component} from 'react';
import {H5, H6} from '../../../../styled';
import {
	CartOverImgBlock,
	CartOverlayCounterBlock,
	CartOverlayProductDescription, SmallCardCost, SmallCardDescription, StyledCartOverlayCard,
} from "./styled";
import SizeBlock from "./SizeBlock";

class CartOverlayCard extends Component {
	render() {
		return (
			<StyledCartOverlayCard>
				<CartOverlayProductDescription>
					<SmallCardDescription>Apollo Running Short</SmallCardDescription>
					<SmallCardCost>$50.00</SmallCardCost>
					<SmallCardDescription>Size:</SmallCardDescription>
					<SizeBlock/>
					<SmallCardDescription>Color:</SmallCardDescription>
				</CartOverlayProductDescription>
				<CartOverlayCounterBlock></CartOverlayCounterBlock>
				<CartOverImgBlock></CartOverImgBlock>
			</StyledCartOverlayCard>
		);
	}
}

export default CartOverlayCard;
