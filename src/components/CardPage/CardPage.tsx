import React, {Component} from 'react';
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

class CardPage extends Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			currentImg: ''
		}
	}
	handleChangeImg = (event:any)=>{
		console.log(event.target.src);
		this.setState({...this.state, currentImg: event.target.id})
	}

	render() {
		const {gallery, brand, name, description, attributes, prices} = this.props.data.product || {};
		const currentCurrency = localStorage.getItem('currentCurrency');
		const index = prices?.findIndex((price: any)=> price.currency.symbol === currentCurrency) || 0
		console.log(index);
		console.log('attributes', this.props.data.product);
		if(!this.props.data.product) return <div>...Loading</div>
		return (
			<ProductContainer>
				<ImagesBlock>
					{gallery.map((img: string) => (
						<img
							onClick={this.handleChangeImg}
							src={img}
							id={img}
							alt={img}
							key={uuidv4()}
						/>
					))}
				</ImagesBlock>
				<MainCardBlock>
					<MainImg>
						<img src={this.state.currentImg || gallery[0]} alt={gallery[0]}/>
					</MainImg>
					<CardDescriptionBlock>
						<H3>{brand}</H3>
						<h4>{name}</h4>
						<SelectionPanel>
							<div>
								<SelectionsItemsContainer attributes={attributes} type='text'/>
								<SelectionsItemsContainer attributes={attributes} type='swatch'/>
							</div>
							<PriceField>
								<h5>Price:</h5>
								<div>{prices[index].currency.symbol + ' ' + prices[index].amount}</div>
							</PriceField>
							<div></div>
						</SelectionPanel>
						<CustomButton color='secondary' text='ADD TO CART' handleClick={()=> console.log('btn')} />
						<Description dangerouslySetInnerHTML={{__html: description}} />
					</CardDescriptionBlock>
				</MainCardBlock>
			</ProductContainer>
		);
	}
}

export default getProduct()(CardPage);
