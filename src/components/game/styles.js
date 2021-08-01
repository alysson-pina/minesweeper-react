import styled from 'styled-components'

export const Head = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
`

export const Face = styled.div`
  background-image: url('/sprite200.gif');
  background-position: ${props => props.mouseDown ? '-104px -110px' : props.lost ? '-156px -110px' : '0 -110px' };
  width: 52px;
  height: 52px;
`
