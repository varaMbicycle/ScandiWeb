import styled from "styled-components";

export const StyledCartOverlay = styled.div`
  position: absolute;
  right: 18rem;
  background-color: #ffffff;
  padding: 1rem 1rem;
  width: 325px;
  max-height: 627px;
`
export const CartOverlayButtonsBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
`
export const CartOverlayProductsContainer = styled.div`
  max-height: 400px;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #52be79;
    border-radius: 9em;
    box-shadow: inset 1px 1px 10px #f3faf7;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #317046;
  }

`
export const StyledCartOverlayCard = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  padding: 20px 5px;
  box-shadow: 0px 11px 21px -13px rgba(34, 60, 80, 0.2);
  margin-bottom: 12px;
  min-height: 160px;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem;
    font-size: 12px;
    font-weight: 700;
    position: absolute;
    right: 0.25rem;
    top: 0.75rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    color: rgba(79, 169, 85, 0.58);
    border: 1px solid rgba(0, 0, 0, 0.27);
    background-color: #ffffff;
    transition: 0.2s;

    :hover {
      cursor: pointer;
      color: rgba(30, 61, 34, 0.58);
      border: 1px solid rgba(0, 0, 0, 0.35);
      background-color: #e7e7e7;
    }
  }
`
export const CartOverlayProductDescription = styled.div`
  width: 136px;
  > div{
    max-width: 100%;
  }
`
export const CartOverlayCounterBlock = styled.div`
  width: 32px;
  margin: 0 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  div{
    font-size: 1rem;
    line-height: 1rem;
  }
  button {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    transition: 0.2s;
    border: 1px solid #020202;
    font-size: 1.5rem;
    line-height: 1.5rem;

    :hover {
      cursor: pointer;
      background-color: #f2f2f2;
    }
  }
`
export const CartOverImgBlock = styled.div`
  width: 100px;
  img{
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`
export const SmallCardDescription = styled.div`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 160%;
  > div {
    width: 25px;
    height: 25px;
  }
  h5{
    font-size: 14px;
  }
`
export const SmallCardCost = styled.p`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
`

export const StyledSelectionsItemsContainerCart = styled.div`
  display: flex;
  margin-bottom: 10px;
`
export const TextItemCart = styled.div<{ active: boolean }>`
  min-width: 30px;
  min-height: 25px;
  margin-right: 4px;
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid #000000;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 10px;
  transition: 0.2s;
  background-color: ${props => props.active ? '#000000': '#ffffff'};
  color: ${props => props.active ? '#ffffff' : '#000000'};

  :hover {
    cursor: pointer;
    transform: ${props => props.active ? 'scale(1)' : 'scale(1.075)'};
  }
  :active{
    transform: scale(1);
  }
`
export const SwatchItemCart = styled.div<{ color: string, active: boolean }>`
  width: 22px;
  height: 22px;
  margin-right: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${props => props.active ? '2px solid #5ECE7B': '2px solid rgba(88, 88, 88, 0.15)'};
  transition:0.2s;
  :hover {
    cursor: pointer;
    transform: ${props => props.active ? 'scale(1)' : 'scale(1.1)'};
  }
  :active{
    transform: scale(1);
  }
  div{
    width: 20px;
    height: 20px;
    background-color: ${props => props.color};
  }
`
export const PriceFieldCart = styled.div`
  margin-bottom: 20px;
	div{
	  font-family: "Raleway", sans-serif;
	  font-size: 24px;
	  font-weight: 700;
	}
`
export const TextItemCartNoLive = styled.div<{ active: boolean }>`
  min-width: 30px;
  min-height: 25px;
  margin-right: 4px;
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid #000000;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 10px;
  transition: 0.2s;
  background-color: ${props => props.active ? '#000000': '#ffffff'};
  color: ${props => props.active ? '#ffffff' : '#000000'};
`
export const SwatchItemCartNoLive = styled.div<{ color: string, active: boolean }>`
  width: 22px;
  height: 22px;
  margin-right: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${props => props.active ? '2px solid #5ECE7B': '2px solid rgba(88, 88, 88, 0.15)'};
  transition:0.2s;
  
  div{
    width: 20px;
    height: 20px;
    background-color: ${props => props.color};
  }
`
