import React, {Component} from 'react';
import './styles.css'
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import {graphql} from "@apollo/client/react/hoc";
import {gql} from "@apollo/client";
import {v4 as uuidv4} from "uuid";
import {getAllCategories, getAllCurrenciesWithCategories} from "./queries";
import {ICategories} from "./Interfaces";
import CardPage from "./components/CardPage/CardPage";


class App extends Component<any> {
	constructor(props:any) {
		super(props);
		this.state = {
			currentCurrency: localStorage.getItem('currentCurrency')
		}
		this.handleChangeCurrency = this.handleChangeCurrency.bind(this);
	}
	handleChangeCurrency(currency: string){
		this.setState({...this.state, currentCurrency: currency })
	}
	render() {
		const {categories, currencies} = this.props.data;
		return (
			<div className="App">
				<BrowserRouter>
					<Header
						categories={categories}
						currencies={currencies}
						handleChangeCurrency={this.handleChangeCurrency}
					/>
					<Routes>
						{categories && categories.map(
							({name}: any) => (
									<Route
										key={uuidv4()}
										path={name === 'all'? '/': name}
										element={<Main name={name} />}
									/>
								)
						)}
						<Route
							key={uuidv4()}
							path='tech/product'
							element={<CardPage name='ps-5'/>}
						/>
						<Route
							key={uuidv4()}
							path='clothes/product'
							element={<CardPage name='ps-5'/>}
						/>
						<Route
							key={uuidv4()}
							path='product'
							element={<CardPage name='ps-5'/>}
						/>
					</Routes>
				</BrowserRouter>
			</div>
		);
	}
}


export default getAllCurrenciesWithCategories(App);
