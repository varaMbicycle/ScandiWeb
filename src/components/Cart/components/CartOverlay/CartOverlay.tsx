import React, {Component} from 'react';
import {CartOverlayButtonsBlock, CartOverlayProductsContainer, StyledCartOverlay} from "./styled";
import CustomButton from "../../../CustomButton/CustomButton";
import CartOverlayCard from "./CartOverlayCard";
import {v4 as uuidv4} from "uuid";
import { H6 } from '../../../../styled';
import { StyledTotalCostDescription } from '../../../CustomButton/styled';
import { NavLink } from 'react-router-dom';
import { IPrice, IProduct } from "../../../../Interfaces";


interface ICartOverlay {
	handleClose: () => void;
	onIncrement: (event: any) => void;
	onDecrement: (event: any) => void;
	selectItem: ()=>void;
	products: any;
	currentCurrency: string;
	onDelete: (id: string) => void;
}

const CartOverlay = React.forwardRef((props: ICartOverlay, ref: any) => {
	class CartOverlay extends Component<ICartOverlay> {
		constructor(props: ICartOverlay) {
			super(props);
		}
		render() {
			const currentCurrency = this.props.currentCurrency
			const totalCost = this.props.products.reduce((total: number, product: any) => {
				return total += (product?.prices.find((price: IPrice) => {
					return price.currency.symbol === currentCurrency
				}).amount) * product.quantity
			}, 0)
			const quantity = this.props.products.length;
			return (
				<StyledCartOverlay ref={ref}>
					{quantity ? <H6>My Bag, {quantity} {quantity !== 1 ? 'items' : 'item'}</H6> : <H6>My Bag is empty</H6>}
					<CartOverlayProductsContainer>
						{this.props.products.map((product: IProduct) => (
							<CartOverlayCard
								key={uuidv4()}
								product={product}
								onIncrement={this.props.onIncrement}
								onDecrement={this.props.onDecrement}
								onDelete={this.props.onDelete}
								selectItem={this.props.selectItem}
							/>
						))}
					</CartOverlayProductsContainer>
					{!!quantity && <StyledTotalCostDescription>
						<H6>Total</H6>
						<H6>{currentCurrency}{totalCost.toFixed(2)}</H6>
					</StyledTotalCostDescription>}
					<CartOverlayButtonsBlock>
						<NavLink to='/cart'><CustomButton color='primary' text='VIEW BAG' handleClick={this.props.handleClose}/></NavLink>
						<CustomButton color='secondary' text='CHECK OUT' handleClick={this.props.handleClose}/>
					</CartOverlayButtonsBlock>
				</StyledCartOverlay>
			);
		}
	}
	return <CartOverlay
		currentCurrency={props.currentCurrency}
		handleClose={props.handleClose}
	    onDecrement={props.onDecrement}
		onDelete={props.onDelete}
		onIncrement={props.onIncrement}
		products={props.products}
		selectItem={props.selectItem}/>
})


export default CartOverlay;
