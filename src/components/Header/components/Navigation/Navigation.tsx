import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {ListNavigation, StyledLI} from '../styled';
import {v4 as uuidv4} from 'uuid';
import {graphql} from '@apollo/client/react/hoc';
import {gql} from "@apollo/client";

interface IState {
	path: string;
	navigatePanel: string[],
}

class Navigation extends Component<any, IState> {
	constructor(props: any) {
		super(props)
		this.state = {
			path: localStorage.getItem('activeTab') || '/',
			navigatePanel: [],
		}
	}

	handleActiveTab = (activeTab: string) => {
		localStorage.setItem('activeTab', activeTab);
		this.setState({...this.state, path: activeTab})
	}

	render() {
		const {categories} = this.props.data;
		return (
			<ListNavigation>
				{categories && categories.map(
					({name}: any) => (
						<NavLink to={name} key={uuidv4()} style={({isActive}) => ({
							borderBottom: '4px solid #89e389',
							color: isActive ? 'red' : 'green',
							textTransform: 'capitalize'
						})}>
							{name}
						</NavLink>
					)
				)}
			</ListNavigation>
		);
	}
}

export default graphql(gql`
query {
		categories {
            name
        }
	}
`)(Navigation);
