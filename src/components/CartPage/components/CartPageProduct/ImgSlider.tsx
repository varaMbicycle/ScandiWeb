import React, {Component} from 'react';
import {ImgContainer, ImgSliderContainer} from "./styled";

const IMG_WIDTH = 190;
const ref = React.createRef<any>();
class ImgSlider extends Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			posX: 0
		}
	}

	componentDidMount() {
		this.setState({posX: this.props.activeImg * IMG_WIDTH * -1})
	}

	handleSlideRight = (event: any) => {
		if(this.state.posX > (this.props.gallery.length * IMG_WIDTH * -1 + IMG_WIDTH)){
			this.setState((prev: any)=> (
				{...prev, posX: prev.posX -= IMG_WIDTH}
			))
			setTimeout(()=> this.props.moveRight(event.target.id), 350)
		}
	}
	handleSlideLeft = (event: any) => {
		if(this.state.posX){

			this.setState((prev: any)=> (
				{...prev, posX: prev.posX += IMG_WIDTH}
			))
			setTimeout(()=> this.props.moveLeft(event.target.id), 350)
		}
	}

	render() {
		const images = this.props.gallery
		return (
			<ImgSliderContainer>
				<ImgContainer ref={ref} style={{
					transform: `translateX(${this.state.posX}px)`
				}}>
					{images.map((img: string) => <img src={img} key={img} alt={img}/>)}
				</ImgContainer>

				{(this.props.gallery.length !== 1) && <div>
					<button onClick={this.handleSlideLeft} id={this.props.name}>{'<'}</button>
					<button onClick={this.handleSlideRight} id={this.props.name}>{'>'}</button>
				</div>}
			</ImgSliderContainer>
		);
	}
}

export default ImgSlider;
