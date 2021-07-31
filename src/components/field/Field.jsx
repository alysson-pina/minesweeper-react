
import React, { useLayoutEffect, useState } from 'react'
import { Cell } from './styles'

const Field = ({ hasMine, revealNeighborhood, lost, setLost, updateBombCount, row, column }) => {
  const [clicked, setClicked] = useState(false)
  const [isFlagged, setFlagged] = useState(false)
  const [value, setValue] = useState('')

  console.log({
    row, column, hasMine
  })

  useLayoutEffect(() => {
    if(lost) {
      setValue(hasMine ? '💣' : '')
    }
  }, [lost, hasMine, setValue])

  const handleRightClick = (e) => {
    e.preventDefault()

    if(lost) {
      return
    }

    const newValue = !isFlagged

    updateBombCount(newValue)
    setFlagged(newValue)

    if(newValue) {
      setValue('🚩')
    } else {
      setValue('')
    }
  }

  const handleLeftClick = (e) => {
    e.preventDefault()
  
    if(clicked || lost) {
      return
    }

    setClicked(true)

    if (hasMine) {
      setValue('💣')
      setLost(true)
    } else {
      // show value
      // revealNeighborhood()
    }
  }

  return (
    <Cell 
      onClick={handleLeftClick}
      onContextMenu={handleRightClick}
      mistakeWasHere={hasMine && clicked}
      className={`row${row}_column${column}`}
    >
      {value}
    </Cell>
  )
}

export default Field
