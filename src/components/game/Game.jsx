import React, { useCallback, useEffect, useState, useMemo } from 'react'

import { Board } from '..'
import { initStructure } from '../../utils/initBoard'
import { useLargeScreen } from '../../utils/mediaQueries'
import { Face, Head } from './styles'

const Game = () => {
  const isLargeScreen = useLargeScreen()
  const [height, width] = [16, isLargeScreen ? 30 : 16]
  const [attempts, setAttempts] = useState(1)
  const [bombCount, setBombCount] = useState(isLargeScreen ? 99 : 52)
  const [lost, setLost] = useState(false)
  const [mouseDown, onMouseDown] = useState(false)

  const structure = useMemo(
    () => initStructure(height, width, bombCount),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [attempts, width]
  )

  const restartGame = useCallback(fromResize => {
    setBombCount(isLargeScreen ? 99 : 52)
    setAttempts(value => value + fromResize ? 0 : 1)
    setLost(false)
  }, [setAttempts, setBombCount, setLost, isLargeScreen])

  useEffect(() => {
    restartGame(true)
  }, [restartGame, isLargeScreen])

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
          height={height}
        />
      </div>
    </div>
  )
}

export default Game
