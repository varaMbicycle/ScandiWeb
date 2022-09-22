import React, {Component, memo} from 'react';
import {ImagesBlock, MainImg, StyledImg, StyledImgContainer} from "../../styled";
import {v4 as uuidv4} from "uuid";

interface IState {
	currentImg: string
}

class ImgContainer extends Component<any, IState > {
	constructor(props:any) {
		super(props);
		this.state = {
			currentImg: this.props.gallery[0] || ''
		}
	}
	handleChangeImg = (event: any) => {
		this.setState({...this.state, currentImg: event?.target?.id})
	}

	render() {
		const {gallery} = this.props;
		return (
			<StyledImgContainer>
				<ImagesBlock>
					{gallery.map((img: string) => (
						<StyledImg active={img === this.state.currentImg} key={uuidv4()}>
							<img
								onClick={this.handleChangeImg}
								src={img}
								id={img}
								alt={img}
							/>
						</StyledImg>

					))}
				</ImagesBlock>
				<MainImg>
					<img src={this.state.currentImg || gallery[0]} alt={gallery[0]}/>
				</MainImg>
			</StyledImgContainer>
		);
	}
}

export default memo(ImgContainer);
