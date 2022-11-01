import styled from "styled-components";

export const CartBackground = styled.div<{ isOpen: boolean }>`
  position: absolute;
  left: 0;
  right: 0;
  top: 65px;
  bottom: 0;
  background-color: rgba(57, 55, 72, 0.22);
  z-index: 3;
  transition: 0.4s;
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  opacity: ${props => props.isOpen ? 1 : 0};
`

