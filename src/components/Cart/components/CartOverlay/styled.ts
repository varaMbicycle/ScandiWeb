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
  width: 100%;
  height: 190px;
  padding: 20px 0;
`
export const CartOverlayProductDescription = styled.div`
  border: 1px solid red;
  width: 136px;
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
  //border: 1px solid red;
  width: 121px;
  img{
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`
export const SmallCardDescription = styled.p`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 160%;
`
export const SmallCardCost = styled.p`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 160%;
`
export const SizeBlockStyled = styled.div`
  display: flex;
  justify-content: space-between;

  label {
    border: 1px solid #000000;
    transition: 0.2s;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }

  label:hover {
    cursor: pointer;
    background-color: #e7e7e7;
  }

  input {
    display: none;
  }

  input:checked + label {
    background-color: #000000;
    color: #ffffff;
  }
`
