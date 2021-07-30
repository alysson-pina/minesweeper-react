
import React, { useState } from 'react'
import { Cell } from './styles'

const Field = ({ hasMine, revealNeighborhood, loseGame, index }) => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    if(clicked) {
      return
    }

    setClicked(true)

    if (hasMine) {
      loseGame()
    } else {
      revealNeighborhood()
    }
  }

  return (
    <Cell onClick={() => handleClick}>
      {/* {clicked ? 'X' : ''} */}
      {/* {hasMine ? '💣' : ''} */}
    </Cell>
  )
}

export default Field
