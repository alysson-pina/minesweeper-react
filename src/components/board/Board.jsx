
import React, { useRef } from 'react'


import { Wrapper } from './styles'
import { Field } from '..'
import { get1DIndexFrom2D } from '../../utils/position'
import useBoardPixelWidth from './useBoardPixelWidth'
import { HEIGHT } from '../../constants/board'
import { NAVIGATION_KEYS, createRightClickEventForElement } from '../../utils/mouseEvents'
import { detectFieldPosition } from '../../utils/fieldDetection'

const Board = ({ updateBombCount, won, lost, setLost, structure, width }) => {
  const fieldsRef = useRef([])
  const computeBoardPixelWidth = useBoardPixelWidth()

  const revealNeighborhood = (row, column) => {
    const pos = get1DIndexFrom2D(column, row, width)
    const columns = [column - 1, column, column + 1]
    const rows = [row - 1, row, row + 1]

    for(let x in columns) {
      for (let y in rows ) {
        const candidateFieldPos = get1DIndexFrom2D(columns[x], rows[y], width)
        if(
          (candidateFieldPos === pos) || // avoid same field again
          (columns[x] < 0 || rows[y] < 0) || // avoid inexistant left or top edges
          ( rows[y] >= HEIGHT || columns[x] >= width ) // avoid inexistant right or bottom edges
          ) {
            continue
          }

          const ref = fieldsRef.current[candidateFieldPos]

          setImmediate(
            () => ref?.click() // async click to avoid infinite loop
          )
      }
    }
  }

  const handleArrowKeyNavigation = (currentPosition, keyCode) => {
    let increment = 0

    switch(keyCode) {
      case 'ArrowLeft':
        increment = -1
        break
      case 'ArrowRight':
        increment = 1
        break
      case 'ArrowUp':
        increment = -width
        break
      case 'ArrowDown':
        increment = width
        break
      default:
    }

    let newPosition = currentPosition + increment
    const numberOfElements = fieldsRef?.current.length

    // check boundaries
    if(newPosition < 0) {
      newPosition += numberOfElements - 1
    }

    if(newPosition >= numberOfElements) {
      newPosition -= numberOfElements - 1
    }

    // focus field at new calculated position
    fieldsRef?.current[newPosition]?.focus()
  }

  const handleKeyDown = (e) => {
    const [position] = detectFieldPosition(e, width)
    const fieldRef = fieldsRef.current[position] // detect which field is the target

    if(e.code === 'Space') {
      const event = createRightClickEventForElement(fieldRef)
      fieldRef?.dispatchEvent(event)
    } else if(e.code === 'KeyC' || e.code === 'Enter') {
      fieldRef?.click()
    } else if(NAVIGATION_KEYS.indexOf(e.code) >= 0) {
      handleArrowKeyNavigation(position, e.code)
    }
  }

  return (
    <Wrapper width={computeBoardPixelWidth} onKeyDown={handleKeyDown}>
      {
        structure?.map(({ i, j, value }) => {
          const pos = get1DIndexFrom2D(j, i, width)

          return (
            <Field
              ref={el => {
                fieldsRef.current[pos] = el
              } }
              key={`${i}_${j}`} 
              row={i}
              column={j}
              hasMine={value === 'B'}
              value={value}
              won={won}
              lost={lost}
              setLost={setLost}
              updateBombCount={updateBombCount}
              revealNeighborhood={revealNeighborhood}
            />
          )
        })
      }
    </Wrapper>
  )
}

export default Board
