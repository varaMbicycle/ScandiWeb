import React, {Component} from 'react';
import { getCurrencies } from '../../queries';
import Navigation from "./components/Navigation/Navigation";
import UserBar from "./components/UserBar/UserBar";
import {AppBar, StyledNavigation} from './styled'

class Header extends Component<any> {
	render() {
		return (
			<AppBar>
				<StyledNavigation>
					<Navigation />
				</StyledNavigation>
				<img src={process.env.PUBLIC_URL + "/img/a-logo.svg"} alt="logo" height={41} width={41}/>
				<UserBar/>
			</AppBar>
		);
	}
}

export default getCurrencies(Header);
