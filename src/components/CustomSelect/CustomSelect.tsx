import React, {Component} from 'react';
import {SelectOptions} from "../Header/components/UserBar/styled";
import {DropDownSelectMoney, SelectMoneyContainer, ToggleSelectMoney} from "../Header/components/UserBar/styled";

interface IProps {
	value: any;
	onChange: (value: any) => void;
	children?: React.ReactNode;
}

interface IState {
	isOpen: boolean;
}

export const SelectContext = React.createContext((value: any) => {
});

class CustomSelect extends Component<IProps, IState> {
	state: IState = {
		isOpen: false
	}

	dropDownRef = React.createRef<HTMLDivElement>();
	toggleRef = React.createRef<HTMLSpanElement>();

	clickOutside = (event: MouseEvent) => {
		if (this.state.isOpen && this.dropDownRef.current && !this.dropDownRef.current.contains(event.target as Node)) this.handleClose()
	}

	componentDidMount() {
		document.addEventListener("mousedown", this.clickOutside)
	}

	componentWillUnmount() {
		document.removeEventListener("mousedown", this.clickOutside)
	}

	handleOpen = () => {
		if(this.toggleRef.current) this.toggleRef.current.style.transform = `rotate(${180}deg`;
		!this.state.isOpen && this.setState({isOpen: true})
	}
	handleClose = () => {
		if(this.toggleRef.current) this.toggleRef.current.style.transform = `rotate(${0}deg`;
		this.setState({isOpen: false})
	}
	handleChange = (value: any) => {
		this.props.onChange(value)
		this.handleClose()
	}

	render() {
		return (
			<SelectContext.Provider value={this.handleChange}>
				<SelectMoneyContainer ref={this.dropDownRef}>
					<ToggleSelectMoney isOpen={this.state.isOpen}
					                   onClick={this.state.isOpen ? this.handleClose : this.handleOpen}>
						{this.props.value}
						<span
							ref={this.toggleRef}
							className="material-symbols-outlined">
							expand_more
						</span>
					</ToggleSelectMoney>
					<DropDownSelectMoney isOpen={this.state.isOpen}>
						<SelectOptions>
							{this.props.children}
						</SelectOptions>
					</DropDownSelectMoney>
				</SelectMoneyContainer>
			</SelectContext.Provider>
		);
	}
}

export default CustomSelect;
