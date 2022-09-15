import React, {Component} from 'react';
import {ImgSliderContainer} from "./styled";

class ImgSlider extends Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			count: 0,
		};
	}
	handleSlideRight = ()=>{
		if(this.state.count < this.props.gallery.length - 1) this.setState({...this.state, count: this.state.count + 1})
	}
	handleSlideLeft = ()=>{
		if(this.state.count > 0) this.setState({...this.state, count: this.state.count - 1})
	}
	render() {
		const {gallery} = this.props;
		return (
			<ImgSliderContainer>
				<img src={gallery[this.state.count]} alt={gallery[this.state.count]}/>
				{(gallery.length !== 1) && <div>
					<button onClick={this.handleSlideLeft}>{'<'}</button>
					<button onClick={this.handleSlideRight}>{'>'}</button>
				</div>}
			</ImgSliderContainer>
		);
	}
}

export default ImgSlider;
