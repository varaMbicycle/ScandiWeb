import React, {Component} from 'react';
import ReactHtmlParser from 'react-html-parser';
import {
	CardDescriptionBlock,
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
import { IAttributes, IPrice } from "../../Interfaces";
import Loader from "../Loader/Loader";

class CardPage extends Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {}
	}

	handleChangeItem = (attributes: IAttributes) => {
		const p = this.state?.id ? {...this.state} : changeProductForBasket(this.props.data.product);
		const attr = p.attributes.map((attribute: IAttributes)=> {
			if(attribute.id === attributes.id){
				attribute.activeItem = attributes.index
			}
			return attribute;
		})
		this.setState({...p, attributes: [...attr]})
	}

	handleAddToBasket = () => {
		const productForCart = this.state?.id ? this.state : changeProductForBasket(this.props.data.product)
		this.props.add(productForCart);
		this.setState({...changeProductForBasket(this.props.data.product)})
	}

	componentDidMount() {
		if(this.props.data.product){
			this.setState({...changeProductForBasket(this.props.data.product)})
		}
		window.scrollTo(0, 0);
	}

	render() {
		if (!this.props.data.product) return <Loader />
		const {
			gallery,
			brand,
			name,
			description,
			attributes,
			prices,
			inStock
		} = changeProductForBasket(this.props.data.product);

		const currentCurrency = localStorage.getItem('currentCurrency');
		const index = prices?.findIndex((price: IPrice) => price.currency.symbol === currentCurrency) || 0
		return (
			<ProductContainer>
				<ImgContainer gallery={gallery} isStock={!inStock}/>
				<MainCardBlock>
					<CardDescriptionBlock>
						<H3>{brand}</H3>
						<h4>{name}</h4>
						<SelectionPanel>
							{!!attributes.length && <div>{attributes.map((attribute: IAttributes, i: number, arr: IAttributes[]) => (
									<SelectionsItemsContainer
										handleChangeItem={this.handleChangeItem}
										active={this.state?.id ? this.state.attributes[i].activeItem : 0}
										item={arr[i].id}
										attributes={arr[i]}
										type={arr[i].type}
										key={uuidv4()}
										isStock={inStock}
									/>
								)
							)}
							</div>}
							<PriceField>
								<h5>Price:</h5>
								<div>{prices[index].currency.symbol + prices[index].amount.toFixed(2)}</div>
							</PriceField>
						</SelectionPanel>
						<CustomButton
							color='secondary'
							text={inStock ? 'ADD TO CART' : 'OUT OF STOCK'}
							handleClick={this.handleAddToBasket}
							disabled={!inStock}
						/>
						<>{ReactHtmlParser(description)}</>
					</CardDescriptionBlock>
				</MainCardBlock>
			</ProductContainer>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withParams(getProduct()(CardPage)));
