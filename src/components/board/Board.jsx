
import React, { useState, useMemo } from 'react'

import { Wrapper } from './styles'
import { Field } from '..'
// import { initBoard } from '../../utils/initBoard'

const Board = ({ height, width, bombCount, setBombCount, lost, setLost, structure }) => {
  const revealNeighborhood = () => {}

  console.log({structure})

  const updateBombCount = (bool) => setBombCount(bombCount + (bool ? -1 : 1))

  return (
    <Wrapper>
      {
        structure?.map(({ i, j, value }) => (
          <Field 
            key={`${i}_${j}`} 
            row={i}
            column={j}
            hasMine={value}
            lost={lost}
            setLost={setLost}
            updateBombCount={updateBombCount}
          />
        ))
      }
    </Wrapper>
  )
}

export default Board
