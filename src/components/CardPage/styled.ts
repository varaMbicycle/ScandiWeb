import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  padding: 80px 100px;
`

export const ImagesBlock = styled.div`
  max-width: 80px;

  img {
    display: block;
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: contain;
    margin: 40px 0;
    transition: 0.2s;
    padding: 5px;
    border-radius: 5px;

    :hover {
      cursor: pointer;
      box-shadow: 0 1px 16px 2px rgba(34, 60, 80, 0.2);
      transform: scale(1.2);
    }

    :active {
      transform: scale(1);
      box-shadow: 0 0.5px 4px 1px rgba(34, 60, 80, 0.2);
    }
  }
`
export const MainCardBlock = styled.div`
  max-width: 100%;
  margin-right: 220px;
  margin-left: 40px;
  display: flex;
  justify-content: space-between;
`
export const MainImg = styled.div`
  width: 560px;

  img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: contain;
  }
`
export const CardDescriptionBlock = styled.div`
  max-width: 292px;
  margin-left: 100px;

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
`

export const SelectionPanel = styled.div`

`
export const Description = styled.p`
  margin-top: 40px;
  font-size: 16px;
  font-weight: 400;
  line-height: 25.59px;
  font-family: "Roboto", sans-serif;
`
export const StyledSelectionsItemsContainer = styled.div`
  display: flex;
  margin-bottom: 24px;
`
export const TextItem = styled.div<{ active: boolean }>`
  width: 63px;
  height: 45px;
  margin-right: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000000;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
  transition: 0.2s;
  background-color: ${props => props.active ? '#000000': '#ffffff'};
  color: ${props => props.active ? '#ffffff' : '#000000'};

  :hover {
    cursor: pointer;
    transform: scale(1.075);
  }
`
export const SwatchItem = styled.div<{ color: string, active: boolean }>`
  width: 36px;
  height: 36px;
  margin-right: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${props => props.active ? '2px solid #5ECE7B': '2px solid rgba(88, 88, 88, 0.15)'};
  transition:0.2s;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  div{
    width: 32px;
    height: 32px;
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
