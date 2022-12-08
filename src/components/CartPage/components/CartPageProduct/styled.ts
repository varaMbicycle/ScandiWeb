import styled from "styled-components";

export const CartProductContainer = styled.section`
  display: flex;
  justify-content: space-between;
  position: relative;
  flex-wrap: wrap;
  @media (max-width: 600px){
    justify-content: center;
    >div, >section{
      width: 100%;
    }
  }
}
  
  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem;
    font-size: 16px;
    font-weight: 700;
    position: absolute;
    right: -0.75rem;
    top: 0.75rem;
    width: 1.5rem;
    height: 1.5rem;
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
`

export const CartProductDescription = styled.section`
  margin: 24px 0;
	
  h3 {
    margin-bottom: 16px;
    font-size: 30px;
    font-weight: 600;
  }

  h4 {
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: 400;
  }

  h5 {
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 700;
  }
  div>div>h5{
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 18px;
    margin-bottom: 7px;
  }
`

export const CounterImgContainer = styled.div`
  display: flex;
  margin: 24px 0;
  @media (max-width: 600px){
    justify-content: space-between;
  }
`

export const ImgSliderContainer = styled.div`
  height: 290px;
  width: 190px;
  display: flex;
  margin-left: 24px;
  position: relative;
  z-index: 2;
  overflow: hidden;
  
  div:nth-child(2) {
    position: absolute;
    bottom: 10px;
    right: 10px;

    button {
      margin-right: 5px;
      font-size: 16px;
      padding: 3px 7px;
      background-color: rgba(0, 0, 0, 0.56);
      border: none;
      color: #ffffff;
      transition: 0.2s;

      :hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.8);
      }
    }
  }

  img {
    transition: 1s;
    min-width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

export const ImgContainer = styled.div`
  height: 290px;
  width: 190px;
  display: flex;
  transition: 0.4s;
`


