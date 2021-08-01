
import styled from 'styled-components'
import prependWithPublicUrl from '../../utils/getPublicUrl'

export const Wrapper = styled.div`
  background-image: url(${prependWithPublicUrl('sprite200.gif')});
  background-position: ${props => props.startPosition} -110px;
  width: 52px;
  height: 52px;
`
