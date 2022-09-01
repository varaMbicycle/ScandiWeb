import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {ListNavigation, StyledLI} from '../styled';
import {navigate} from "./const";
import {v4 as uuidv4} from 'uuid';

interface IState {
	path: string;
}

class Navigation extends Component<any, IState> {
	constructor(props: any) {
		super(props)
		this.state = {
			path: localStorage.getItem('activeTab') || '/',
		}
	}

	handleActiveTab = (activeTab: string) => {
		localStorage.setItem('activeTab', activeTab);
		this.setState({...this.state, path: activeTab})
	}

	render() {
		return (
			<ListNavigation>
				{navigate.map(
					link => (
						<Link to={link === '/woman' ? '/' : link} key={uuidv4()}>
							<StyledLI
								onClick={() => this.handleActiveTab(link)}
								style={link === this.state.path ?{borderBottom: '4px solid #89e389', color: '#89e389'} : {}}
							>
								{link.slice(1).toUpperCase()}
							</StyledLI>
						</Link>
					)
				)}
			</ListNavigation>


		);
	}
}

export default Navigation;
