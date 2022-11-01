import React, {Component} from 'react';
import {CartProductContainer, CartProductDescription, CounterImgContainer} from "./styled";
import {v4 as uuidv4} from "uuid";
import {SelectionPanel} from "../../../CardPage/styled";
import CartOverlayCounter from "../../../Cart/components/CartOverlay/CartOverlayCounter";
import ImgSlider from "./ImgSlider";
import {IAttributes, IPrice} from "../../../../Interfaces";
import AttributesContainer from "./AttributesContainer";

class CartPageProduct extends Component<any> {

	render() {
		const {prices, attributes, brand, name, gallery, id, activeImg, quantity} = this.props.product;
		const {currentCurrency, selectItem} = this.props;
		const currency = prices.find((price: IPrice) => price.currency.symbol === currentCurrency).amount;
		return (
			<CartProductContainer>
				<CartProductDescription>
					<h3>{brand}</h3>
					<h4>{name}</h4>
					<h5>{currentCurrency}{currency.toFixed(2)}</h5>
					<SelectionPanel>
						{!!attributes.length && <div>{attributes.map((attribute: IAttributes, i: number, arr: IAttributes[]) => (
								<AttributesContainer
									attributes={arr[i]}
									type={arr[i].type}
									key={uuidv4()}
									selectItem={selectItem}
									product={id}
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
						value={quantity}
						id={id}
					/>
					<ImgSlider
						moveLeft={this.props.moveLeft}
						moveRight={this.props.moveRight}
						gallery={gallery}
						name={id}
						activeImg={activeImg}
					/>
				</CounterImgContainer>
			</CartProductContainer>
		);
	}
}

export default CartPageProduct;
