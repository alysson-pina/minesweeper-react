import styled from "styled-components"

export const Cell = styled.div`
  flex: 1 1 32px;
  width: 32px;
  height: 32px;
  background-image: url('/sprite200.gif');
  background-position: 0 -78px;

  &.unclicked {
    background-position: 0 -78px;
  }

  &.bomb {
    background-position: ${props => props.mistakeWasHere ? '-64px -78px' : '-128px -78px;'}
  }

  &.mistakenBomb {
    background-position: -96px -78px;
  }
  
  &.zero {
    background-position: 0 -46px;
  }

  &.flag {
    background-position: -32px -78px;
  }

  &.one {
    background-position: -32px -46px;
  }

  &.two {
    background-position: -64px -46px;
  }

  &.three {
    background-position: -96px -46px;
  }

  &.four {
    background-position: -128px -46px;
  }

  &.five {
    background-position: -160px -46px;
  }

  &.six {
    background-position: -192px -46px;
  }

  &.seven {
    background-position: -224px -46px;
  }

  &.eigth {
    background-position: -256px -46px;
  }
`
