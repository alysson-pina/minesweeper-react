import React from 'react'
import { Wrapper } from './styles'

const Face = ({ won, lost, mouseDown, restartGame }) => {
  const startPosition = won ? '-208px' : lost ? '-156px' : mouseDown ? '-104px' : '0'

  return <Wrapper startPosition={startPosition} onClick={() => restartGame()} />
}

export default Face
