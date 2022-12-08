import styled from "styled-components";

export const MainStyled = styled.main`
  padding: 80px 100px;
  @media (max-width: 1080px) {
    padding: 4rem 2rem 2rem;
  }
  @media (max-width: 600px) {
    padding: 0.75rem;
  }
`

export const SectionStyled = styled.section`
  padding: 103px 0;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat( auto-fill, minmax(320px, 1fr));
  grid-row-gap: 103px;
  grid-column-gap: 40px;
  @media (max-width: 600px) {
    padding: 2rem 0;
    grid-template-columns: repeat( auto-fill, minmax(260px, 1fr));
  }
`