import React, {Component} from 'react';
import {SizeBlockStyled} from "./styled";

class SizeBlock extends Component {
	render() {
		return (
			<SizeBlockStyled>
				<input type="radio" name='size' id='XS'/>
				<label htmlFor='XS'>XS</label>
				<input type="radio" name='size' id='S'/>
				<label htmlFor='S'>S</label>
				<input type="radio" name='size' id='M'/>
				<label htmlFor='M'>M</label>
				<input type="radio" name='size' id='L'/>
				<label htmlFor='L'>L</label>
			</SizeBlockStyled>
		);
	}
}

export default SizeBlock;
