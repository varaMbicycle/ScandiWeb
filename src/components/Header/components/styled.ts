import styled from "styled-components";

export const ListNavigation = styled.ul`
  list-style: none;
  display: flex;
  padding: 4px 16px;
  a {
    text-decoration: none;
  }
  @media (max-width: 1080px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const StyledLI = styled.li`
  height: 100%;
  text-decoration: none;
  color: #000000;
  padding: 1.5rem 2rem;

  :hover {
    background-color: rgba(227, 227, 227, 0.06);
    box-shadow: -2px -7px 0px -2px rgba(34, 60, 80, 0.07) inset;
    color: #3b633b;
  }
`


