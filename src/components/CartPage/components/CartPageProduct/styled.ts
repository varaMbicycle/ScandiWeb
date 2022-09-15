import styled from "styled-components";

export const CartProductContainer = styled.section`
  display: flex;
  justify-content: space-between;
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
`
export const ImgSliderContainer = styled.div`
  height: 290px;
  max-width: 190px;
  display: flex;
  margin-left: 24px;
  position: relative;

  div {
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
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`