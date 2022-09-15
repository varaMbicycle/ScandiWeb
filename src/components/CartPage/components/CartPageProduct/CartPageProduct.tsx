import React, {Component} from 'react';
import {CartProductContainer, CartProductDescription, CounterImgContainer} from "./styled";
import SelectionsItemsContainer from "../../../CardPage/components/SelectionsItemsContainer/SelectionsItemsContainer";
import {v4 as uuidv4} from "uuid";
import {PriceField, SelectionPanel} from "../../../CardPage/styled";
import CartOverlayCounter from "../../../Cart/components/CartOverlay/CartOverlayCounter";
import ImgSlider from "./ImgSlider";

class CartPageProduct extends Component<any> {
	render() {
		const {product} = this.props;
		const currentCurrency = localStorage.getItem('currentCurrency');
		const currency = product.prices.find((price: any) => price.currency.symbol === currentCurrency).amount;
		const attributes = product.attributes;
		console.log(this.props);
		return (
			<CartProductContainer>
				<CartProductDescription>
					<h3>{product.brand}</h3>
					<h4>{product.name}</h4>
					<h5>{currentCurrency} {currency}</h5>
					<SelectionPanel>
						{!!attributes.length && <div>{attributes.map((attribute: any, i: number, arr: any) => (
								<SelectionsItemsContainer attributes={arr[i]} type={arr[i].type} key={uuidv4()}/>
							)
						)}
						</div>}
					</SelectionPanel>
				</CartProductDescription>
				<CounterImgContainer>
					<CartOverlayCounter
						onIncrement={this.props.onIncrement}
						onDecrement={this.props.onDecrement}
						value={this.props.product.quantity}
						id={this.props.product.id}
					/>
				<ImgSlider gallery={product.gallery}/>
				</CounterImgContainer>

			</CartProductContainer>
		);
	}
}

export default CartPageProduct;
