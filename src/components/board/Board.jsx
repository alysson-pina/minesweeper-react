
import React, { useRef } from 'react'


import { Wrapper } from './styles'
import { Field } from '..'
import { get1DIndexFrom2D } from '../../utils/position'
import { useLargeScreen } from '../../utils/mediaQueries'

const Board = ({ bombCount, setBombCount, lost, setLost, structure, width, height }) => {
  const fieldsRef = useRef([])
  const isLargeScreen = useLargeScreen()

  const updateBombCount = (flagged) => setBombCount(bombCount + (flagged ? -1 : 1))

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
          ( rows[y] >= height || columns[x] >= width ) // avoid inexistant right or bottom edges
          ) {
            continue
          }

          const ref = fieldsRef.current[candidateFieldPos]

          setImmediate(
            () => ref.click() // async click to avoid infinite loop
          )
      }
    }
  }

  return (
    <Wrapper isLargeScreen={isLargeScreen}>
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
