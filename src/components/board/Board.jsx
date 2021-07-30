
import React, { useState, useMemo } from 'react'

import { Wrapper } from './styles'
import { Field } from '..'

const initBoard = (height, width, bombCount) => {
  let pos

  const board = Array.from(
    { length: height * width }, (_, i) => ({ i, value: '' })
  )

  for(let i=0; i<bombCount; i+=1){
    pos = Math.floor((Math.random() * height * width))
    board[pos].value = true

    // update neighbors
    // updateNeighbours()
  }

  return board
}

const Board = ({ height, width, bombCount, setBombCount, lost, setLost }) => {
  const revealNeighborhood = () => {}

  const board = useMemo(() => initBoard(height, width, bombCount), [height, width, bombCount])

  console.log({board})

  const updateBombCount = (bool) => setBombCount(bombCount + (bool ? -1 : 1))

  return (
    <Wrapper>
      {
        board.map(({ i, value }) => (
          <Field 
            key={i} 
            index={i}
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
