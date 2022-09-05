import React, {Component} from 'react';
import Navigation from "./components/Navigation/Navigation";
import ActiveBTN from "./components/UserBar/UserBar";
import {AppBar, StyledNavigation} from './styled'
import {ICategories} from "../../Interfaces";

class Header extends Component<any, any> {
	constructor(props: ICategories[]) {
		super(props);
	}
	render() {
		console.log(this.props)
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

export default Header;
