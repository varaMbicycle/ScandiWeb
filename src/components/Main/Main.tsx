import React, {Component} from 'react';
import {H2} from '../../styled';
import {MainStyled, SectionStyled} from "./styled";
import Card from "./Card/Card";
import CustomButton from "../CustomButton/CustomButton";

interface IPropsMain {
	category: string
}

class Main extends Component<IPropsMain> {
	constructor(props: IPropsMain) {
		super(props);

	}

	componentDidMount() {
		const pathname = window.location.pathname;
		localStorage.setItem('activeTab', pathname === '/' ? '/woman' : pathname);
	}

	render() {
		return (
			<MainStyled>
				<H2>{this.props.category}</H2>
				<SectionStyled>
					<Card/>
					<Card/>
					<Card/>
				</SectionStyled>
			</MainStyled>
		);
	}
}

export default Main;
