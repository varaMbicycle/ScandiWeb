import styled from "styled-components";

export const AppBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 101px;

  @media (max-width: 1080px) {
    padding: 0 1rem;
    position: relative;
    left: 0;
    right: 0;
  }
`

export const StyledNavigation = styled.nav`
  display: flex;
  @media (max-width: 1080px) {
    display: none;
  }
`;
