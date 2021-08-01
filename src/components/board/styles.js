import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: ${props => props.isLargeScreen ? '970px' : '516px'};
`

