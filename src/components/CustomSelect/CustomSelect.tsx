import React, {Component} from 'react';
import {SelectOptions} from "../Header/components/UserBar/styled";
import {DropDownSelectMoney, SelectMoneyContainer, ToggleSelectMoney} from "../Header/components/UserBar/styled";
import {getCurrencies} from "../../queries";
import {connect} from "react-redux";
import {mapDispatchToProps, mapStateToProps} from "../../store/maps";

interface IProps {
	value: string;
	onChange: (value: string) => void;
	children?: any;
}

interface IState {
	isOpen: boolean;
}

export const SelectContext = React.createContext((value: string) => {
});

class CustomSelect extends Component<any, IState> {
	state: IState = {
		isOpen: false,
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
	handleChange = (value: string) => {
		this.props.onChange(value)
		this.handleClose()
		this.props.setCurrency(value);
	}

	render() {
		const chosen = this.props.children.map((el:any) => el.props.value).findIndex((el:any)=> el ===localStorage.getItem('currentCurrency'));
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
						<SelectOptions choose={chosen + 1}>
							{this.props.children}
						</SelectOptions>
					</DropDownSelectMoney>
				</SelectMoneyContainer>
			</SelectContext.Provider>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomSelect);
