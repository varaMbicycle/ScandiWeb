import React, {Component} from 'react';
import {ImgSliderContainer} from "./styled";

class ImgSlider extends Component<any, any> {
	constructor(props: any) {
		super(props);
	}

	handleSlideRight = (event: any) => {
		this.props.moveRight(event.target.id)
	}
	handleSlideLeft = (event: any) => {
		this.props.moveLeft(event.target.id)
	}

	render() {
		const img = this.props.gallery[this.props.activeImg]
		return (
			<ImgSliderContainer>
				<img src={img} alt={img}/>
				{(this.props.gallery.length !== 1) && <div>
					<button onClick={this.handleSlideLeft} id={this.props.name}>{'<'}</button>
					<button onClick={this.handleSlideRight} id={this.props.name}>{'>'}</button>
				</div>}
			</ImgSliderContainer>
		);
	}
}

export default ImgSlider;
