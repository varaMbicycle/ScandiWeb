import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  padding: 80px 100px;
`

export const ImagesBlock = styled.div`
  max-width: 80px;

  img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: contain;
    margin: 20px 0;
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
  max-width: 560px;

  img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: contain;
  }
`
export const CardDescriptionBlock = styled.div`
  max-width: 292px;
  margin-left: 100px;
  p {
    font-size: 30px;
    font-weight: 400;
    padding: 1rem 0;
  }
`
export const Description = styled.p`
  
`
