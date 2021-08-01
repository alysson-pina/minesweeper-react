
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
})

const Field = React.forwardRef(({ 
    hasMine, value, lost, setLost, updateBombCount, row, column, revealNeighborhood 
  }, ref) => {
  const [clicked, setClicked] = useState(false)
  const [isFlagged, setFlagged] = useState(false)
  const [content, setContent] = useState('unclicked')

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
      setContent('uncliked')
      setClicked(false)
      setFlagged(false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lost, hasMine, setContent, value])

  const handleRightClick = (e) => {
    e.preventDefault()

    if(clicked || lost) {
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
      ref={ref}
      onClick={handleLeftClick}
      onContextMenu={handleRightClick}
      mistakeWasHere={hasMine && clicked}
      className={`row${row+1}_column${column+1} ${CLASSES[content]}`}
    />
  )
})

export default Field
