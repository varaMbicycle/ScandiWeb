import React, {Component} from 'react';
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
				<UserBar
					currencies={this.props.currencies}
					handleChangeCurrency={this.props.handleChangeCurrency}
				/>
			</AppBar>
		);
	}
}

export default Header;
