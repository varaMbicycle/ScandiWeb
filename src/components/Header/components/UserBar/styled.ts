import styled from "styled-components";

export const CartButton = styled.button`
  position: relative;
  background: none;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
  margin-right: 20px;
  cursor: pointer;
  @media (max-width: 1080px) {
    margin-left: 0.5rem;
    margin-right: 12px;
  }
`

export const CartCounter = styled.div<{ count: number }>`
  font-family: 'Roboto', sans-serif;
  font-size: 0.7rem;
  position: absolute;
  right: -0.75rem;
  top: -0.75rem;
  display: ${props => props.count ? 'inline-flex' : 'none'};
  align-items: center;
  justify-content: center;
  padding: 0.35rem;
  background-color: #0f0f0f;
  color: #f0f0f0;
  border-radius: 50%;
  min-width: 1rem;
  min-height: 1rem;
  aspect-ratio: 1/1;
  content: ${props => props.count};
`

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 33%;
  position: relative;
`

export const SelectMoneyContainer = styled.div`
  position: relative;
`

export const ToggleSelectMoney = styled.button<{ isOpen: boolean }>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 1.75rem 0 1rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.4;
  background-color: #fff;
  border: none;
  cursor: pointer;
  user-select: none;
  transition: 0.4s;
  min-width: 2rem;

  span {
    position: absolute;
    right: 0;
    transition: 0.4s;
    display: block;
    justify-content: end;
    align-items: end;
  }
`

export const DropDownSelectMoney = styled.div<{ isOpen: boolean }>`
  position: absolute;
  z-index: 4;
  top: 2.5rem;
  left: -0.5rem;
  transition: 0.4s;
  display: block;
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  opacity: ${props => props.isOpen ? 1 : 0};
  min-width: 6rem;
  background-color: #fff;
  box-shadow: -2px -7px 41px 16px rgba(34, 60, 80, 0.07);
  border-radius: 0.3125rem;
`

export const SelectOptions = styled.ul<{ choose: number }>`
  margin: 0;
  padding: 0;
  list-style: none;

  li:nth-child(${props => props.choose}) {
    background-color: rgba(183, 183, 183, 0.51);
  }
`

export const OptionStyled = styled.li`
  padding: 0.75rem 0.25rem 0.75rem 1.25rem;
  display: flex;
  justify-content: start;
  align-items: center;

  :hover {
    background-color: rgba(221, 221, 221, 0.51);
    cursor: pointer;
    transition: 0.2s background-color ease-in-out;
  }
`
