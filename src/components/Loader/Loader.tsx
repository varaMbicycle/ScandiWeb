import React, {Component} from 'react';
import {ContainerSpinner, Spinner} from "./styled";

class Loader extends Component {
	render() {
		return (
			<ContainerSpinner>
				L
				<Spinner className="lds-spinner">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</Spinner>
				ading...
			</ContainerSpinner>

		);
	}
}

export default Loader;