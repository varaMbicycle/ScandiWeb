import React from 'react';
import './styles.css'
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
			<Header/>
				<Routes>
					<Route path='/all' element={<Main category='For woman'/>} />
					<Route path='/clothes' element={<Main category='For man'/>} />
					<Route path='/tech' element={<Main category='For kids'/>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
