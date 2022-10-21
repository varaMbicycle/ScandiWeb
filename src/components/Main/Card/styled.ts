import styled from "styled-components";

export const CardStyled = styled.div<{ inStock: boolean }>`
  position: relative;
  padding: 16px;
  display: flex;
  flex-direction: column;
  transition: 0.3s;

  a {
    text-decoration: none;
    color: #1D1F22;
    opacity: ${props => props.inStock ? 1 : 0.4};
  }

  img {
    display: block;
    aspect-ratio: 1/1;
    object-fit: contain;
    width: 100%;
  }

  div {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    content: ${props => props.inStock ? 'OUT OF STOCK' : ''};
  }

  div > div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    color: #8D8F9A;
    font-size: 24px;
    font-family: "Roboto Regular", sans-serif;
  }

  button {
    position: absolute;
    padding: 1rem;
    background-color: #5ECE7B;
    color: #f2f7ff;
    border-radius: 50%;
    border: none;
    display: block;
    opacity: 0;
    right: 1.5rem;
    bottom: 3.75rem;
    transition: 0.3s;
  }

  button:hover {
    cursor: pointer;
    transition: 0.1s;
    background-color: #4ba761;
  }

  button:active {
    background-color: #3b854d;
  }

  button img {
    position: relative;
    right: 0.1rem;
    top: 0.1rem;
  }

  :hover {
    box-shadow: 0px 1px 16px 4px rgba(34, 60, 80, 0.2);
    cursor: pointer;
  }

  :hover button {
    opacity: 1;
  }
`
