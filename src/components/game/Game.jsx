import React, { useState, useMemo } from 'react'
import { Board } from '..'
import { initStructure } from '../../utils/initBoard'
import { Face, Head } from './styles'

const Game = () => {
  const [height, width] = [16, 30]
  const [attempts, setAttempts] = useState(1)
  const [bombCount, setBombCount] = useState(99)
  const [lost, setLost] = useState(false)

  const structure = useMemo(
    () => initStructure(height, width, bombCount),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [attempts]
  )

  const restartGame = () => {
    setBombCount(99)
    setAttempts(attempts + 1)
    setLost(false)
  }

  return <div>
    <Head>
      <div>Bombs left: {bombCount}</div>
      <Face lost={lost} onClick={restartGame} />
      <div>{lost ? 'You lost!' : `Attempt #${attempts}`}</div>
    </Head>
    <Board
      bombCount={bombCount}
      setBombCount={setBombCount}
      lost={lost}
      setLost={setLost}
      structure={structure}
      width={width}
      height={height}
    />
  </div>
}

export default Game
