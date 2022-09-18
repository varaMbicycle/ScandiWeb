import React, {Component} from 'react';
import {SizeBlockStyled} from "./styled";
import {sizes} from "../../../../const";
import {v4 as uuidv4} from 'uuid';

class SizeBlock extends Component {

	render() {
		const name = uuidv4();
		return (
			<SizeBlockStyled>
				{sizes.map(size => {
					const id = uuidv4();
					return(
						<React.Fragment key={id}>
							<input type="radio" name={name} id={id}/>
							<label htmlFor={id}>{size}</label>
						</React.Fragment>
					)})
				}
			</SizeBlockStyled>
		);
	}
}

export default SizeBlock;
