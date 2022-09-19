import React, {Component} from 'react';
import {CartProductContainer, CartProductDescription, CounterImgContainer} from "./styled";
import SelectionsItemsContainer from "../../../CardPage/components/SelectionsItemsContainer/SelectionsItemsContainer";
import {v4 as uuidv4} from "uuid";
import {SelectionPanel} from "../../../CardPage/styled";
import CartOverlayCounter from "../../../Cart/components/CartOverlay/CartOverlayCounter";
import ImgSlider from "./ImgSlider";

class CartPageProduct extends Component<any> {

	render() {
		const {prices, attributes, brand, name, gallery} = this.props.product;
		const currentCurrency = localStorage.getItem('currentCurrency');
		const currency = prices.find((price: any) => price.currency.symbol === currentCurrency).amount;
		return (
			<CartProductContainer>
				<CartProductDescription>
					<h3>{brand}</h3>
					<h4>{name}</h4>
					<h5>{currentCurrency} {currency}</h5>
					<SelectionPanel>
						{!!attributes.length && <div>{attributes.map((attribute: any, i: number, arr: any) => (
								<SelectionsItemsContainer
									attributes={arr[i]}
									type={arr[i].type}
									key={uuidv4()}
									selectItem={this.props.selectItem}
									product={this.props.product.id}
									item={arr[i].id}
								/>
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
					<ImgSlider
						moveLeft={this.props.moveLeft}
						moveRight={this.props.moveRight}
						gallery={gallery}
						name={this.props.product.id}
						activeImg={this.props.product.activeImg}
					/>
				</CounterImgContainer>

			</CartProductContainer>
		);
	}
}

export default CartPageProduct;
