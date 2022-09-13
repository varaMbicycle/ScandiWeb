import React, {Component} from 'react';
import {H5, H6} from '../../../../styled';
import {CartOverlayButtonsBlock, CartOverlayProductsContainer, StyledCartOverlay} from "./styled";
import CustomButton from "../../../CustomButton/CustomButton";
import {StyledTotalCostDescription} from "../../../CustomButton/styled";
import CartOverlayCard from "./CartOverlayCard";
import {v4 as uuidv4} from "uuid";


interface ICartOverlay {
	handleClose: () => void;
	products: any;
}

class CartOverlay extends Component<ICartOverlay> {
	constructor(props: ICartOverlay) {
		super(props);
		this.state = {
			products: []
		}
	}

	render() {
		const currentCurrency = this.props.products.value;
		const totalCost = this.props.products.cart.products.reduce((total: number, product: any) => (
			total += product.prices.find((price: any) => price.currency.symbol === currentCurrency).amount
		), 0)
		const quantity = this.props.products.cart.quantity;
		const products = this.props.products;
		return (
			<StyledCartOverlay>
				{quantity ? <H6>My Bag, {quantity} {quantity !== 1 ? 'items' : 'item'}</H6> : <H6>My Bag is empty</H6>}
				<CartOverlayProductsContainer>
					{products.cart.products.map((product: any) => (
						<CartOverlayCard key={uuidv4()} product={product}/>
					))}
				</CartOverlayProductsContainer>
				{!!quantity && <StyledTotalCostDescription>
					<H6>Total</H6><H6>{currentCurrency} {totalCost.toFixed(2)}</H6>
				</StyledTotalCostDescription>}
				<CartOverlayButtonsBlock>
					<CustomButton color='primary' text='VIEW BAG' handleClick={() => console.log('xxx')}/>
					<CustomButton color='secondary' text='CHECK OUT' handleClick={this.props.handleClose}/>
				</CartOverlayButtonsBlock>
			</StyledCartOverlay>
		);
	}
}

export default CartOverlay;
