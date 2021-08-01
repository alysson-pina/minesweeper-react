import { HEIGHT } from '../constants/board'
import { get1DIndexFrom2D, get2DIndexFrom1D } from './position'

export const initStructure = (width, bombCount) => {
  const structure = Array.from(
    { length: HEIGHT * width }, (_, i) => ({
      i: Math.floor(i / width),
      j: i % width,
      value: ''
    })
  )

  let pos
  let count = 0

  while (count < bombCount) {
    pos = Math.floor((Math.random() * HEIGHT * width))

    if (structure[pos].value !== 'B') {
      structure[pos].value = 'B'
      updateNeighbours(structure, pos, width)
      count += 1
    }
  }

  return structure
}

const updateNeighbours = (structure, pos, width) => {
  const { i, j } = get2DIndexFrom1D(pos, width)
  const rows = [i - 1, i, i + 1]
  const columns = [j - 1, j, j + 1]

  let index1D, nOfBombs

  for (const x in rows) {
    for (const y in columns) {
      if (
        (rows[x] < 0 || columns[y] < 0) ||
        (columns[y] >= width || rows[x] >= HEIGHT)
      ) {
        continue
      }

      index1D = get1DIndexFrom2D(columns[y], rows[x], width)
      if (structure[index1D] && structure[index1D]?.value !== 'B') {
        nOfBombs = structure[index1D].value
        structure[index1D].value = nOfBombs ? nOfBombs + 1 : 1
      }
    }
  }
}
