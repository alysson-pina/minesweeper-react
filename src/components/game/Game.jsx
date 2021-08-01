import React, { useCallback, useEffect, useState, useMemo } from 'react'

import { Board } from '..'
import { initStructure } from '../../utils/initBoard'

import { Face, Head } from './styles'
import useBombCount from './useBombCount'
import useWidth from './useWidth'

const HEIGHT = 16

const Game = () => {
  const initialBombCount = useBombCount()
  const width = useWidth()
  const [attempts, setAttempts] = useState(1)
  const [bombCount, setBombCount] = useState(initialBombCount)
  const [lost, setLost] = useState(false)
  const [mouseDown, onMouseDown] = useState(false)

  const structure = useMemo(
    () => initStructure(HEIGHT, width, bombCount),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [attempts, width]
  )

  const restartGame = useCallback(fromResize => {
    setBombCount(initialBombCount)
    setAttempts(value => value + fromResize ? 0 : 1)
    setLost(false)
  }, [setAttempts, setBombCount, setLost, initialBombCount])

  useEffect(() => {
    restartGame(true)
  }, [restartGame, width])

  return (
    <div>
      <Head>
        <div>Bombs left: {bombCount}</div>
        <Face lost={lost} mouseDown={mouseDown} onClick={restartGame} />
        <div>{lost ? 'You lost!' : `Attempt #${attempts}`}</div>
      </Head>
      <div
        onMouseDown={() => onMouseDown(true)}
        onMouseUp={() => onMouseDown(false)}
      >
        <Board
          bombCount={bombCount}
          setBombCount={setBombCount}
          lost={lost}
          setLost={setLost}
          structure={structure}
          width={width}
          HEIGHT={HEIGHT}
        />
      </div>
    </div>
  )
}

export default Game
