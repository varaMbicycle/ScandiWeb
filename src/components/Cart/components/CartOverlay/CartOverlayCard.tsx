import React, {Component} from 'react';
import {
	CartOverImgBlock,
	CartOverlayProductDescription,
	SmallCardCost,
	SmallCardDescription,
	StyledCartOverlayCard,
} from "./styled";
import CartOverlayCounter from "./CartOverlayCounter";
import {v4 as uuidv4} from "uuid";
import {IAttributes, IPrice} from "../../../../Interfaces";
import ItemsContainerCart from "../ItemsContainerCart";
import Loader from "../../../Loader/Loader";

class CartOverlayCard extends Component<any> {

	render() {
		const currentCurrency = localStorage.getItem('currentCurrency');
		const {attributes, name, id, quantity, gallery} = this.props.product;
		const price = this.props.product.prices.find((price: IPrice) => price.currency.symbol === currentCurrency).amount;
		const {selectItem, onIncrement, onDecrement} = this.props;

		if (!attributes) return <Loader />
		return (
			<StyledCartOverlayCard>
				<CartOverlayProductDescription>
					<SmallCardDescription>{name}</SmallCardDescription>
					<SmallCardCost>{currentCurrency}{price.toFixed(2)}</SmallCardCost>
					<SmallCardDescription>
						{!!attributes.length &&
							attributes.map((attribute: IAttributes, i: number, arr: IAttributes[]) => (
								<ItemsContainerCart
									selectItem={selectItem}
									attributes={arr[i]}
									product={id}
									item={arr[i].id}
									type={arr[i].type}
									key={uuidv4()}
								/>))}
					</SmallCardDescription>
				</CartOverlayProductDescription>
				<CartOverlayCounter
					onIncrement={onIncrement}
					onDecrement={onDecrement}
					value={quantity}
					id={id}
				/>
				<CartOverImgBlock>
					<img src={gallery[0]} alt={name}/>
				</CartOverImgBlock>
			</StyledCartOverlayCard>
		);
	}
}

export default CartOverlayCard;
