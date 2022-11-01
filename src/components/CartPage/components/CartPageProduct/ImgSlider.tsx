import React, {Component} from 'react';
import {ImgContainer, ImgSliderContainer} from "./styled";

const IMG_WIDTH = 190;

interface IImgSlider {
	posX: number
}

const ref = React.createRef<any>();
class ImgSlider extends Component<any, IImgSlider> {
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
			this.setState((prev: IImgSlider)=> (
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
		const {gallery, name} = this.props
		return (
			<ImgSliderContainer>
				<ImgContainer ref={ref} style={{
					transform: `translateX(${this.state.posX}px)`
				}}>
					{gallery.map((img: string) => <img src={img} key={img} alt={img}/>)}
				</ImgContainer>

				{(gallery.length !== 1) && <div>
					<button onClick={this.handleSlideLeft} id={name}>{'<'}</button>
					<button onClick={this.handleSlideRight} id={name}>{'>'}</button>
				</div>}
			</ImgSliderContainer>
		);
	}
}

export default ImgSlider;
