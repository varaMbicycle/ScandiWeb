import React, {Component} from 'react';
import { H5, H6 } from '../../../../styled';
import {CartOverlayButtonsBlock, CartOverlayProductsContainer, StyledCartOverlay} from "./styled";
import CustomButton from "../../../CustomButton/CustomButton";
import {StyledTotalCostDescription} from "../../../CustomButton/styled";
import CartOverlayCard from "./CartOverlayCard";

interface ICartOverlay {
	handleClose: ()=> void;
}
class CartOverlay extends Component<ICartOverlay> {
	constructor(props:ICartOverlay) {
		super(props);
	}
	render() {
		return (
			<StyledCartOverlay>
				<H6>My Bag,</H6>
				<CartOverlayProductsContainer>
					<CartOverlayCard/>
					<CartOverlayCard/>
				</CartOverlayProductsContainer>
				<StyledTotalCostDescription>
					<H6>Total</H6><H6>$200.00</H6>
				</StyledTotalCostDescription>
				<CartOverlayButtonsBlock>
					<CustomButton color='primary' text='VIEW BAG' handleClick={()=> console.log('xxx')}/>
					<CustomButton color='secondary' text='CHECK OUT' handleClick={this.props.handleClose}/>
				</CartOverlayButtonsBlock>
			</StyledCartOverlay>
		);
	}
}

export default CartOverlay;
