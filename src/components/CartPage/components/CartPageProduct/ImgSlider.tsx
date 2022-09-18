import React, {Component} from 'react';
import {ImgSliderContainer} from "./styled";

class ImgSlider extends Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			num: 0,
		};
	}
	handleSlideRight = ()=>{
		if(this.state.num < this.props.gallery.length - 1) this.setState({...this.state, num: this.state.num + 1})
	}
	handleSlideLeft = ()=>{
		if(this.state.num > 0) this.setState({...this.state, num: this.state.num - 1})
	}
	render() {
		const {gallery} = this.props;
		return (
			<ImgSliderContainer>
				<img src={gallery[this.state.num]} alt={gallery[this.state.num]}/>
				{(gallery.length !== 1) && <div>
					<button onClick={this.handleSlideLeft}>{'<'}</button>
					<button onClick={this.handleSlideRight}>{'>'}</button>
				</div>}
			</ImgSliderContainer>
		);
	}
}

export default ImgSlider;
