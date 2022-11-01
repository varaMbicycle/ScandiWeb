import styled from "styled-components";

export const StyledCustomButton = styled.button<{ color: string, disabled: boolean }>`
  background-color: ${props => props.color === 'primary' ? '#ffffff' : '#5ECE7B'};
  border: ${props => props.color === 'primary' ? '1px solid #000000' : '1px solid #5ECE7B'};
  color: ${props => props.color === 'primary' ? '#000000' : '#ffffff'};
  padding: 0.5rem 1.5rem;
  transition: 0.2s;
  min-width: 140px;
  min-height: 43px;
  font-size: 14px;
  font-weight: 600;

  :hover {
    cursor: pointer;
    background-color: ${props => props.color === 'primary' ? '#ececec' : '#49a060'};
  }

  :disabled {
    background-color: #6f6f6f;
    opacity: 0.4;
    border: 1px solid #6f6f6f;
    :active{
      background-color: #6f6f6f;
      opacity: 0.4;
      border: 1px solid #6f6f6f;
    }
    :hover{
      background-color: #6f6f6f;
      opacity: 0.4;
      border: 1px solid #6f6f6f;
      cursor: no-drop;
    }
  }

  :active {
    background-color: ${props => props.color === 'primary' ? '#dedede' : '#418d54'};
    border: ${props => props.color === 'primary' ? '1px solid rgb(167, 167, 167)' : '1px solid #5ECE7B'};
  }
`

export const StyledTotalCostDescription = styled.div`
  display: flex;
  justify-content: space-between;
`
