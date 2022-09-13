import React, {Component, memo} from 'react';
import {
	CardDescriptionBlock,
	Description,
	ImagesBlock,
	MainCardBlock,
	MainImg, PriceField,
	ProductContainer,
	SelectionPanel,
} from "./styled";
import {getProduct} from "../../queries";
import {H3} from "../../styled";
import CustomButton from "../CustomButton/CustomButton";
import {v4 as uuidv4} from "uuid";
import SelectionsItemsContainer from "./components/SelectionsItemsContainer/SelectionsItemsContainer";
import withParams from "../../utils";
import ImgContainer from "./components/ImgContainer/ImgContainer";
import {ADD, DEL} from "../../store/Action";
import { connect } from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from "../../store/maps";

class CardPage extends Component<any, any> {
	constructor(props: any) {
		super(props);
	}
	render() {
		const {gallery, brand, name, description, attributes, prices} = this.props.data.product || {};
		const currentCurrency = localStorage.getItem('currentCurrency');
		const index = prices?.findIndex((price: any) => price.currency.symbol === currentCurrency) || 0
		if (!this.props.data.product) return <div>...Loading</div>
		return (
			<ProductContainer>
				<ImgContainer gallery={gallery}/>
				<MainCardBlock>
					<CardDescriptionBlock>
						<H3>{brand}</H3>
						<h4>{name}</h4>
						<SelectionPanel>
							{!!attributes.length && <div>{attributes.map((attribute: any, i: number, arr: any) => (
									<SelectionsItemsContainer attributes={arr[i]} type={arr[i].type} key={uuidv4()}/>
								)
							)}
							</div>}

							<PriceField>
								<h5>Price:</h5>
								<div>{prices[index].currency.symbol + ' ' + prices[index].amount}</div>
							</PriceField>
							<div></div>
						</SelectionPanel>
						<CustomButton
							color='secondary'
							text='ADD TO CART'
							handleClick={() => this.props.add(this.props.data.product)}/>
						<Description dangerouslySetInnerHTML={{__html: description}}/>
					</CardDescriptionBlock>
				</MainCardBlock>
			</ProductContainer>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withParams(getProduct()(CardPage)));
