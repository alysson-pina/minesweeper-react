
import React, { useLayoutEffect, useState } from 'react'
import { Cell } from './styles'

const classes = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eigth',
  B: 'bomb',
  F: 'flag',
}

const Field = ({ hasMine, value, revealNeighborhood, lost, setLost, updateBombCount, row, column }) => {
  const [clicked, setClicked] = useState(false)
  const [isFlagged, setFlagged] = useState(false)
  const [content, setContent] = useState('unclicked')

  // console.log({
  //   row, column, hasMine
  // })

  useLayoutEffect(() => {
    if(lost) {
      setContent(value || 0)
    }
  }, [lost, setContent, value])

  const handleRightClick = (e) => {
    e.preventDefault()

    if(lost) {
      return
    }

    const newValue = !isFlagged

    updateBombCount(newValue)
    setFlagged(newValue)

    if(newValue) {
      setContent('F')
    } else {
      setContent('unclicked')
    }
  }

  const handleLeftClick = (e) => {
    e.preventDefault()
  
    if(clicked || lost) {
      return
    }

    setClicked(true)

    if (hasMine) {
      setContent('B')
      setLost(true)
    } else {
      setContent(value)
      // revealNeighborhood()
    }
  }

  return (
    <Cell 
      onClick={handleLeftClick}
      onContextMenu={handleRightClick}
      mistakeWasHere={hasMine && clicked}
      className={`row${row+1}_column${column+1} ${classes[content]}`}
    />
  )
}

export default Field
