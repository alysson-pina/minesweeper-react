import React from 'react'
import { Board } from '..'

const Game = () => {
  const [height, width] = [16, 30]
  const bombCount = 99

  return <Board height={height} width={width} bombCount={bombCount} />
}

export default Game
