import React, {Component} from 'react';
import {H2} from '../../styled';
import {MainStyled, SectionStyled} from "./styled";
import Card from "./Card/Card";
import {getProductsOfCategory} from "../../queries";
import {v4 as uuidv4} from "uuid";
import {IProduct} from "../../Interfaces";
import Loader from "../Loader/Loader";

class Main extends Component<any> {
	constructor(props: any) {
		super(props);
	}

	componentDidMount() {
		const pathname = window.location.pathname;
		localStorage.setItem('activeTab', pathname);
	}

	componentDidUpdate() {
		const pathname = window.location.pathname;
		localStorage.setItem('activeTab', pathname);
	}

	render() {
		const {category} = this.props.data;
		if(!category) return <Loader />

		return (
			<MainStyled>
				<H2>{this.props.name.toUpperCase()}</H2>
				<SectionStyled>
					{category && category.products.map((item: IProduct) => (
						<Card card={item}
						      key={uuidv4()}
						/>
					))}
				</SectionStyled>
			</MainStyled>
		);
	}
}

export default getProductsOfCategory()(Main);
