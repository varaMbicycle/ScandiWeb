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
import {getAllCategories, getProductOfCategory} from "./queries";
import {ICategories} from "./Interfaces";


class App extends Component<any> {
	constructor(props:any) {
		super(props);
	}
	render() {
		console.log(this.props.data)
		const {categories} = this.props.data;

		return (
			<div className="App">
				<BrowserRouter>
					<Header categories={categories}/>
					<Routes>
						{categories && categories.map(
							({name}: any) => {
								console.log(name)

								return (
									<Route
										key={uuidv4()}
										path={name === 'all'? '/': name}
										element={<Main name={name} />}
									/>
								)
							}
						)}
					</Routes>
				</BrowserRouter>
			</div>
		);
	}
}


export default getAllCategories(App);
