import React, { useState } from 'react'
import { Board } from '..'
import { Head } from './styles'

const Game = () => {
  const [height, width] = [16, 30]
  const [bombCount, setBombCount] = useState(99)
  const [lost, setLost] = useState(false)

  return <div>
    <Head>
      <div>Bombs left: {bombCount}</div>
      <div>{lost ? 'You lost!' : ''}</div>
    </Head>
    <Board 
      height={height}
      width={width}
      bombCount={bombCount}
      setBombCount={setBombCount}
      lost={lost}
      setLost={setLost}
    />
  </div>
}

export default Game
