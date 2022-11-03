import React, {Component, memo} from 'react';
import {CartOverlayButtonsBlock, CartOverlayProductsContainer, StyledCartOverlay} from "./styled";
import CustomButton from "../../../CustomButton/CustomButton";
import CartOverlayCard from "./CartOverlayCard";
import {v4 as uuidv4} from "uuid";
import {H6} from '../../../../styled';
import {StyledTotalCostDescription} from '../../../CustomButton/styled';
import {NavLink} from 'react-router-dom';
import {IPrice, IProduct} from "../../../../Interfaces";
import Loader from "../../../Loader/Loader";

interface ICartOverlay {
	handleClose: (event: any) => void;
	onIncrement: (event: any) => void;
	onDecrement: (event: any) => void;
	selectItem: () => void;
	products: any;
	currentCurrency: string;
	onDelete: (id: string) => void;
	clickOutside: (event: any) => void;
}

class CartOverlay extends Component<ICartOverlay> {
	constructor(props: ICartOverlay) {
		super(props);
	}

	render() {
		const {currentCurrency, products, onIncrement, onDecrement, onDelete, selectItem, handleClose} = this.props
		const totalCost = this.props.products.reduce((total: number, product: any) => {
			return total += (product?.prices.find((price: IPrice) => {
				return price.currency.symbol === currentCurrency
			}).amount) * product.quantity
		}, 0)
		const quantity = products.length;

		if(!products) return <Loader />
		return (
			<StyledCartOverlay>
				{quantity ? <H6>My Bag, {quantity} {quantity !== 1 ? 'items' : 'item'}</H6> : <H6>My Bag is empty</H6>}
				<CartOverlayProductsContainer>
					{products.map((product: IProduct) => (
						<CartOverlayCard
							key={uuidv4()}
							product={product}
							onIncrement={onIncrement}
							onDecrement={onDecrement}
							onDelete={onDelete}
							selectItem={selectItem}
						/>
					))}
				</CartOverlayProductsContainer>
				{!!quantity && <StyledTotalCostDescription>
					<H6>Total</H6>
					<H6>{currentCurrency}{totalCost.toFixed(2)}</H6>
				</StyledTotalCostDescription>}
				<CartOverlayButtonsBlock>
					<NavLink to='/cart'>
						<CustomButton
							color='primary'
							text='VIEW BAG'
							handleClick={handleClose}
						/>
					</NavLink>
					<CustomButton
						color='secondary'
						text='CHECK OUT'
						handleClick={handleClose}
					/>
				</CartOverlayButtonsBlock>
			</StyledCartOverlay>
		);
	}
}


export default memo(CartOverlay);
