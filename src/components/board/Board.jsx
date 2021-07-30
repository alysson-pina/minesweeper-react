
import React, { useState } from 'react'

import { Wrapper } from './styles'
import { Field } from '..'

const initBoard = (height, width, bombCount) => {
  let pos

  const board = Array.from(
    { length: height * width }, (_, i) => ({ i, value: ''  })
  )

  for(let i=0; i<bombCount; i+=1){
    pos = Math.random() * height * width
    board[Math.floor(pos)].value = true
  }

  return board
}

const Board = ({ height, width, bombCount }) => {
  const [lost, setLost] = useState(false)
  const [won, setWon] = useState(false)

  const loseGame = () => {
    setLost(true)
  }

  const revealNeighborhood = () => {}

  const board = initBoard(height, width, bombCount)

  console.log({ board })

  return (
    <Wrapper>
      {
        board.map(({ i, value }) => <Field key={i} index={i} hasMine={value} />)
      }
    </Wrapper>
  )
}

export default Board
