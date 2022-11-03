import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {ListNavigation} from '../styled';
import {v4 as uuidv4} from 'uuid';
import {getCategories} from "../../../../queries";

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

	render() {
		const {categories} = this.props.data;
		return (
			<ListNavigation>
				{categories && categories.map(
					({name}: { name: string }) => (
						<NavLink to={name}
						         key={uuidv4()}
						         style={({isActive}) => ({
							         color: 'black',
							         padding: '1rem 2rem',
							         borderBottom: isActive ? '4px solid #89e389' : 'none',
						         })}>
							{name.toUpperCase()}
						</NavLink>
					)
				)}
			</ListNavigation>
		);
	}
}

export default getCategories(Navigation);
