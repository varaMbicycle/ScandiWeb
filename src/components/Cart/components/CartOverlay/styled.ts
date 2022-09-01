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
  border: 1px solid red;
  width: 32px;
  margin: 0 4px;
`
export const CartOverImgBlock = styled.div`
  border: 1px solid red;
  width: 121px;
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
