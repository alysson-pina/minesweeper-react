import styled from 'styled-components'
import prependWithPublicUrl from '../../utils/getPublicUrl'

export const Head = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
`

export const Face = styled.div`
  background-image: url(${prependWithPublicUrl('sprite200.gif')});
  background-position: ${props => props.mouseDown ? '-104px -110px' : props.lost ? '-156px -110px' : '0 -110px' };
  width: 52px;
  height: 52px;
`
