import React, {Component} from 'react';
import {CardDescriptionBlock, Description, ImagesBlock, MainCardBlock, MainImg, ProductContainer} from "./styled";
import {getProduct} from "../../queries";
import {H3} from "../../styled";
import CustomButton from "../CustomButton/CustomButton";

class CardPage extends Component<any> {
	constructor(props: any) {
		super(props);
	}

	render() {
		console.log(this.props.data.product)
		const {gallery, brand, name, description} = this.props.data.product || [];
		return (
			<ProductContainer>
				<ImagesBlock>
					{gallery.map((img: string) => <img src={img} alt={img}/>)}
				</ImagesBlock>
				<MainCardBlock>
					<MainImg>
						<img src={gallery[0]} alt={gallery[0]}/>
					</MainImg>
					<CardDescriptionBlock>
						<H3>{brand}</H3>
						<p>{name}</p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam deserunt
						itaque odio. Distinctio doloremque inventore minus quas qui. Blanditiis debitis dolore eaque
						enim esse illum iste obcaecati, odit recusandae!
						<CustomButton color='secondary' text='ADD TO CART' handleClick={()=> console.log('btn')} />
						{description}
					</CardDescriptionBlock>
				</MainCardBlock>
			</ProductContainer>
		);
	}
}

export default getProduct()(CardPage);
