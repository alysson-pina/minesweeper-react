import styled from "styled-components"

export const Cell = styled.div`
  flex: 1 1 35px;
  width: 35px;
  height: 35px;
  background-color: #AFAFAF;
  border: 2px solid black;
  border-color: ${props => props.mistakeWasHere ? 'red' : 'default'}
`
