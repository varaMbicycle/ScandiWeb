import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  padding: 80px 100px;
  justify-content: space-between;
  @media (max-width: 1080px) {
    flex-direction: column;
    padding: 4rem 1rem 1rem;
  }
`

export const StyledImgContainer = styled.div`
  display: flex;

  @media (max-width: 1080px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`

export const ImagesBlock = styled.div`
  position: relative;
  @media (max-width: 1080px) {
    z-index: 2;
    display: flex;
    flex-direction: row;
    min-width: 320px;
    max-width: 360px;
  }
  
  max-width: 80px;
  margin-right: 10px;
`

export const StyledImg = styled.div<{active: boolean}>`
  position: relative;
  transition: 0.4s;
  transform: scale(1);
  
  :hover div{
    transition: 0.4s;
    cursor: ${props => !!props.active ? 'default': 'pointer'};
    transform: ${props => props.active ? 'scale(1)': 'scale(1.2)'};
  }
  div {
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.74);
    color: rgba(141, 143, 154, 0.64);
    font-family: "Roboto Regular", sans-serif;
    pointer-events: none;
  }
  img {
    display: block;
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: contain;
    margin: 0 40px 40px 0;
    transition: 0.4s;
    padding: 7px;
    border-radius: 5px;
    box-shadow: ${props => !!props.active ? '0 0.5px 4px 1px rgba(34, 60, 80, 0.2)': 'none'};

    :hover {
      cursor: ${props => !!props.active ? 'default': 'pointer'};
      box-shadow: ${props => !!props.active ? '0 0.5px 4px 1px rgba(34, 60, 80, 0.2)': '0 1px 16px 2px rgba(34, 60, 80, 0.2)'};
      transform: ${props => props.active ? 'none': 'scale(1.2)'};
    }

    :active {
      transform: ${props => props.active ? 'none': 'scale(1)'};
      box-shadow: ${props => !!props.active ? 'none': '0 0.5px 4px 1px rgba(34, 60, 80, 0.2)'};
    }
  }
  @media (max-width: 1080px){
    img {
      margin: 12px 12px 0 0;
      max-height: 80px;
    }
  }
`

export const MainCardBlock = styled.div`
  max-width: 100%;
  //margin-left: auto;
  @media (max-width: 1080px) {
    margin: 1rem;
    padding-top: 0.5rem;
  }
  display: flex;
  justify-content: space-between;
`

export const MainImg = styled.div`
  //max-width: 560px;
  width: 100%;
  position: relative;
  margin-left: 0.35rem;
  z-index: 1;

  div {
    position: absolute;
    height: 100%;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.74);
    color: rgba(141, 143, 154, 0.64);
    font-size: 48px;
    font-family: "Roboto Regular", sans-serif;
  }

  img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: contain;
  }
`

export const CardDescriptionBlock = styled.div`
  width: 292px;
  margin-left: 1rem;

  h4 {
    font-size: 30px;
    font-weight: 400;
    padding: 1rem 0;
  }

  h5 {
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 700;
    margin-bottom: 8px;
  }
  button{
    width: 100%;
    padding: 1rem;
    display: block;
    height: auto;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 1.25rem;
  }
  @media (max-width: 1080px){
    margin-left: 0;
  }
`

export const SelectionPanel = styled.div`
	+div+div+div{
      width: 100%;
	}
`

export const StyledSelectionsItemsContainer = styled.div`
  display: flex;
  margin-bottom: 24px;
`

export const TextItem = styled.div<{ active: boolean, isStock: boolean }>`
  min-width: 45px;
  min-height: 45px;
  margin-right: 6px;
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid #000000;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
  transition: 0.2s;
  background-color: ${props => props.active && props.isStock ? '#000000': '#ffffff'};
  color: ${props => props.active && props.isStock ? '#ffffff' : '#000000'};
  
  :hover {
    cursor: ${props => !props.isStock ? 'not-allowed' : 'pointer'};
    transform: ${props => props.active ? 'scale(1)' : 'scale(1.075)'};
    transform: ${props => !props.isStock || props.active ? 'scale(1)' : 'scale(1.075)'};
  }
  :active{
    transform: scale(1);
  }
`

export const SwatchItem = styled.div<{ color: string, active: boolean, isStock: boolean }>`
  width: 36px;
  height: 36px;
  margin-right: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${props => props.active && props.isStock ? '2px solid #5ECE7B': '2px solid rgba(88, 88, 88, 0.15)'};
  transition:0.2s;
  
  :hover {
    cursor: ${props => !props.isStock ? 'not-allowed' : 'pointer'};
    transform: ${props => props.active ? 'scale(1)' : 'scale(1.1)'};
    transform: ${props => !props.isStock || props.active ? 'scale(1)' : 'scale(1.1)'};
  }
  
  :active{
    transform: ${props => props.isStock ? 'scale(1)' : ''};
  }
  
  div{
    width: 30px;
    height: 30px;
    background-color: ${props => props.color};
  }
`

export const PriceField = styled.div`
  margin-bottom: 20px;
	div{
	  font-family: "Raleway", sans-serif;
	  font-size: 24px;
	  font-weight: 700;
	}
`

export const TextItemUnselected = styled.div<{ active: boolean }>`
  min-width: 45px;
  min-height: 45px;
  margin-right: 6px;
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid #000000;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
  transition: 0.2s;
  background-color: ${props => props.active ? '#000000': '#ffffff'};
  color: ${props => props.active ? '#ffffff' : '#000000'};
  
  :active{
    transform: scale(1);
  }
`

export const SwatchItemUnselected = styled.div<{ color: string, active: boolean }>`
  width: 36px;
  height: 36px;
  margin-right: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${props => props.active ? '2px solid #5ECE7B': '2px solid rgba(88, 88, 88, 0.15)'};
  transition:0.2s;

  :active{
    transform: scale(1);
  }
  div{
    width: 30px;
    height: 30px;
    background-color: ${props => props.color};
  }
`
