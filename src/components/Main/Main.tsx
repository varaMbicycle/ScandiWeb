import React, {Component} from 'react';
import {H2} from '../../styled';
import {MainStyled, SectionStyled} from "./styled";
import Card from "./Card/Card";
import {getProductsOfCategory} from "../../queries";
import {v4 as uuidv4} from "uuid";

interface IPropsMain {
	category: string
}

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
		return (
			<MainStyled>
				<H2>{this.props.name.toUpperCase()}</H2>
				<SectionStyled>
					{this.props.data.category && this.props.data.category.products.map((item: any) => (
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
