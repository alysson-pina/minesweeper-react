import React, { useCallback, useEffect, useState, useMemo } from 'react'

import { Board, Face } from '..'
import { initStructure } from '../../utils/initBoard'

import { Head } from './styles'
import useBombCount from './useBombCount'
import useWidth from './useWidth'

const HEIGHT = 16

const Game = () => {
  const initialBombCount = useBombCount()
  const width = useWidth()
  const [attempts, setAttempts] = useState(1)
  const [bombCount, setBombCount] = useState(initialBombCount)
  const [bombsFlaggedCorrect, setBombsFlaggedCorrect] = useState(initialBombCount)
  const [won, setWon] = useState(false)
  const [lost, setLost] = useState(false)
  const [mouseDown, onMouseDown] = useState(false)

  const structure = useMemo(
    () => initStructure(HEIGHT, width, initialBombCount),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [attempts, initialBombCount, width]
  )

  const restartGame = useCallback(() => {
    setBombCount(initialBombCount)
    setBombsFlaggedCorrect(initialBombCount)
    setLost(false)
    setWon(false)
  }, [setBombCount, setLost, initialBombCount])

  useEffect(() => {
    restartGame()
  }, [restartGame, width])

  const updateBombCount = (flagged, isCorrectFlag) => {
    const increment = flagged ? -1 : 1

    setBombCount(bombCount + increment)

    if(isCorrectFlag) {
      setBombsFlaggedCorrect(bombsFlaggedCorrect + increment)
      if(bombsFlaggedCorrect + increment === 0) {
        setWon(true)
      }
    }
  }

  const handleFaceClick = () => {
    setAttempts(() => attempts + 1)
    restartGame()
  }

  return (
    <div>
      <Head>
        <div>Bombs left: {bombCount}</div>
        <Face won={won} lost={lost} mouseDown={mouseDown} restartGame={handleFaceClick} />
        <div>{lost ? 'You lost!' : won? 'You won!' : `Attempt #${attempts}`}</div>
      </Head>
      <div
        onMouseDown={() => onMouseDown(true)}
        onMouseUp={() => onMouseDown(false)}
      >
        <Board
          bombCount={bombCount}
          updateBombCount={updateBombCount}
          won={won}
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
