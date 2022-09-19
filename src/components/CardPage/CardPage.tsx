import React, {Component} from 'react';
import {
	CardDescriptionBlock,
	Description,
	MainCardBlock, PriceField,
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
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from "../../store/maps";
import {changeProductForBasket} from "../../utils/utils";

class CardPage extends Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {}
	}

	handleChangeItem = (attributes: any)=>{
		console.log(attributes);
		this.setState({...this.state, attributes: [...attributes]})
	}
	handleAddToBasket = ()=>{
		console.log(this.props);
		this.props.add(changeProductForBasket(this.props.data.product))
	}
	render() {
		if (!this.props.data.product) return <div>...Loading</div>

		const product = changeProductForBasket(this.props.data.product);
		const {gallery, brand, name, description, attributes, prices} = product;
		const currentCurrency = localStorage.getItem('currentCurrency');
		const index = prices?.findIndex((price: any) => price.currency.symbol === currentCurrency) || 0


		return (
			<ProductContainer>
				<ImgContainer gallery={gallery}/>
				<MainCardBlock>
					<CardDescriptionBlock>
						<H3>{brand}</H3>
						<h4>{name}</h4>
						<SelectionPanel>
							{!!attributes.length && <div>{attributes.map((attribute: any, i: number, arr: any) => (
									<SelectionsItemsContainer
										handleChangeItem={this.handleChangeItem}
										selectItem={this.props.selectItem}
										product={this.state.id ? this.state : changeProductForBasket(this.props.data.product)}
										item={arr[i].id}
										attributes={arr[i]}
										// attributes={arr}
										type={arr[i].type}
										key={uuidv4()}/>
								)
							)}
							</div>}

							<PriceField>
								<h5>Price:</h5>
								<div>{prices[index].currency.symbol + ' ' + prices[index].amount}</div>
							</PriceField>
						</SelectionPanel>
						<CustomButton
							color='secondary'
							text='ADD TO CART'
							handleClick={this.handleAddToBasket}/>
						<Description dangerouslySetInnerHTML={{__html: description}}/>
					</CardDescriptionBlock>
				</MainCardBlock>
			</ProductContainer>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withParams(getProduct()(CardPage)));
