import React, {Component, memo} from 'react';
import {ImagesBlock, MainImg, StyledImgContainer} from "../../styled";
import {v4 as uuidv4} from "uuid";

class ImgContainer extends Component<any, any> {
	constructor(props:any) {
		super(props);
		this.state = {
			currentImg: ''
		}
	}
	handleChangeImg = (event: any) => {
		this.setState({...this.state, currentImg: event.target.id})
	}

	render() {
		const {gallery} = this.props;
		return (
			<StyledImgContainer>
				<ImagesBlock>
					{gallery.map((img: string) => (
						<img
							onClick={this.handleChangeImg}
							src={img}
							id={img}
							alt={img}
							key={uuidv4()}
						/>
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
