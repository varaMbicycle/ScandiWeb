import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
} from '@apollo/client';
import {Provider} from "react-redux";
import {store} from "./store/store";

const client = new ApolloClient({
	uri: 'https://server-for-shop-scandiweb.herokuapp.com/graphql',
	cache: new InMemoryCache(),
})

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<Provider store={store}>
		<React.StrictMode>
			<ApolloProvider client={client}>
				<App/>
			</ApolloProvider>
		</React.StrictMode>
	</Provider>
);
