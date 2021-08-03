
import React, { useEffect, useState } from 'react'
import { Cell } from './styles'

const CLASSES = Object.freeze({
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
  MB: 'mistakenBomb',
  F: 'flag',
  U: 'unclicked'
})

const Field = React.forwardRef(({ 
    hasMine, value, won, lost, setLost, updateBombCount, row, column, revealNeighborhood 
  }, ref) => {
  const [clicked, setClicked] = useState(false)
  const [isFlagged, setFlagged] = useState(false)
  const [content, setContent] = useState('U')

  useEffect(() => {
    if(lost) {
      if(content === 'F') {
        if(!hasMine) {
          setContent('MB')
        }
      } else {
        setContent(value || 0)
      }
    } else {
      setContent('U')
      setClicked(false)
      setFlagged(false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lost, hasMine, setContent, value])

  const handleRightClick = (e) => {
    e.preventDefault()

    if(clicked || lost || won) {
      return
    }

    const newValue = !isFlagged

    e.target.focus()
    updateBombCount(newValue, hasMine)
    setFlagged(newValue)

    if(newValue) {
      setContent('F')
    } else {
      setContent('U')
    }
  }

  const handleLeftClick = (e) => {
    e.preventDefault()
  
    if(clicked || lost || won || content === 'F') {
      return
    }

    e.target.focus()
    setClicked(true)

    if (hasMine) { // user clicked on a bomb
      setContent('B')
      setLost(true)
    } else {
      setContent(value || 0)
    }

    if(value === "") { // empty-cell, traverse the DOM
      revealNeighborhood(row, column)
    }
  }

  return (
    <Cell
      tabIndex={0}
      ref={ref}
      onClick={handleLeftClick}
      onContextMenu={handleRightClick} // to handle right click
      mistakeWasHere={hasMine && clicked}
      className={`row${row+1}_column${column+1} ${CLASSES[content]}`}
      data-testid='minefield'
    />
  )
})

export default Field
