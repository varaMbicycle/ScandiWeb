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
	uri: 'https://react-shop-server-test-bpwon2dcd-varachkin.vercel.app/graphql',
	cache: new InMemoryCache({
		addTypename: false
	}),
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
