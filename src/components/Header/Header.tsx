import React, {Component} from 'react';
import Navigation from "./components/Navigation/Navigation";
import ActiveBTN from "./components/UserBar/UserBar";
import {AppBar, StyledNavigation} from './styled'
import {graphql} from "@apollo/client/react/hoc";
import {gql} from "@apollo/client";


class Header extends Component {
	render() {
		return (
			<AppBar>
				<StyledNavigation>
					<Navigation />
				</StyledNavigation>
				<img src={process.env.PUBLIC_URL + "/img/a-logo.svg"} alt="logo" height={41} width={41}/>
				<ActiveBTN/>
			</AppBar>
		);
	}
}

export default graphql(gql`
query {
		categories {
            name
        }
	}
`)(Header);
