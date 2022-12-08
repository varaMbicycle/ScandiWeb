import styled from "styled-components";

export const Message = styled.h2`
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  margin: 3rem;
  @media (max-width: 1080px){
    font-size: 24px;
  }
`

export const CartPageContainer = styled.div`
  padding: 80px 100px;
  @media (max-width: 1080px){
    padding: 1rem 1.5rem;
  }

  h3 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 55px;
  }

  hr {
    opacity: 0.3;
  }
`

export const CartPageResultBlock = styled.div`
  width: 280px;
  margin-top: 32px;
  @media (max-width: 600px){
    width: 100%;
  }

  h5 {
    font-size: 24px;
    padding: 0;
    margin: 8px 0;
    font-weight: 400;
    display: flex;
    justify-content: space-between;

    span {
      font-weight: 700;
      font-size: 24px;
    }
  }

  button {
    margin-top: 16px;
    width: 100%;
  }
`
