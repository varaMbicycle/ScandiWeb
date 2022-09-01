import styled from "styled-components";

export const CardStyled = styled.div`
  position: relative;
  padding: 16px;
  display: flex;
  flex-direction: column;
  transition: 0.3s;

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
