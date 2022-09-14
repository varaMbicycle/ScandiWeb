import React, {Component} from 'react';
import {CartOverlayButtonsBlock, CartOverlayProductsContainer, StyledCartOverlay} from "./styled";
import CustomButton from "../../../CustomButton/CustomButton";
import CartOverlayCard from "./CartOverlayCard";
import {v4 as uuidv4} from "uuid";


interface ICartOverlay {
	handleClose: () => void;
	onIncrement: (event: any) => void;
	onDecrement: (event: any) => void;
	products: any;
	currentCurrency: string;
}

class CartOverlay extends Component<ICartOverlay> {
	render() {
		const currentCurrency = this.props.currentCurrency
		// const totalCost = this.props.products.reduce((total: number, product: any) => {
		// 	return total += (product.product.prices.find((price: any) => {
		// 		return price.currency.symbol === currentCurrency
		// 	}).amount) * product.quantity
		// }, 0)
		// const quantity = this.props.products.cart.quantity;
		return (
			<StyledCartOverlay>
				{/*{quantity ? <H6>My Bag, {quantity} {quantity !== 1 ? 'items' : 'item'}</H6> : <H6>My Bag is empty</H6>}*/}
				<CartOverlayProductsContainer>
					{this.props.products.map((product: any) => (
						<CartOverlayCard
							key={uuidv4()}
							product={product}
							onIncrement={this.props.onIncrement}
							onDecrement={this.props.onDecrement}
						/>
					))}
				</CartOverlayProductsContainer>
				{/*{!!quantity && <StyledTotalCostDescription>*/}
				{/*	<H6>Total</H6>*/}
				{/*	<H6>{currentCurrency} {totalCost.toFixed(2)}</H6>*/}
				{/*</StyledTotalCostDescription>}*/}
				<CartOverlayButtonsBlock>
					<CustomButton color='primary' text='VIEW BAG' handleClick={() => console.log('xxx')}/>
					<CustomButton color='secondary' text='CHECK OUT' handleClick={this.props.handleClose}/>
				</CartOverlayButtonsBlock>
			</StyledCartOverlay>
		);
	}
}

export default CartOverlay;
