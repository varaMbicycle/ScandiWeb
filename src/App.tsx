import React, {Component} from 'react';
import './styles.css'
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import {
	BrowserRouter,
	Routes,
	Route, Navigate,
} from "react-router-dom";
import {v4 as uuidv4} from "uuid";
import {getCurrencies, getCategories} from "./queries";
import CardPage from "./components/CardPage/CardPage";
import CartPage from "./components/CartPage/CartPage";
import {ICategory} from "./Interfaces";


class App extends Component<any> {
	constructor(props: any) {
		super(props);
	}

	componentDidMount() {
		if (!localStorage.getItem('currentCurrency')) localStorage.setItem('currentCurrency', '$')
	}

	render() {
		const {categories} = this.props.data;
		const currenCurrency = localStorage.getItem('currentCurrency');

		return (
			<div className="App">
				<BrowserRouter>
					<Header/>
					<Routes>
						{categories && categories.map(
							({name}: ICategory) => (
								<Route
									key={uuidv4()}
									path={name}
									element={<Main name={name}/>}
								/>
							)
						)}
						<Route path="/" element={<Navigate replace to="/all"/>}/>
						<Route
							key={uuidv4()}
							path={'cart'}
							element={<CartPage currenCurrency={currenCurrency}/>}
						/>
						<Route
							key={uuidv4()}
							path={'/:category/:id'}
							element={<CardPage/>}
						/>
					</Routes>
				</BrowserRouter>
			</div>
		);
	}
}


export default getCategories(App);
