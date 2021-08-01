import { get1DIndexFrom2D, get2DIndexFrom1D } from './position'

export const initStructure = (height, width, bombCount) => {
  const structure = Array.from(
    { length: height * width }, (_, i) => ({
      i: Math.floor(i / width),
      j: i % width,
      value: ''
    })
  )

  let pos
  let count = 0

  while (count < bombCount) {
    pos = Math.floor((Math.random() * height * width))

    if (structure[pos].value !== 'B') {
      structure[pos].value = 'B'
      updateNeighbours(structure, pos, width, height)
      count += 1
    }
  }

  return structure
}

const updateNeighbours = (structure, pos, width, height) => {
  const { i, j } = get2DIndexFrom1D(pos, width)
  const rows = [i - 1, i, i + 1]
  const columns = [j - 1, j, j + 1]

  let index1D, nOfBombs

  for (const x in rows) {
    for (const y in columns) {
      if (
        (rows[x] < 0 || columns[y] < 0) ||
        (columns[y] >= width || rows[x] >= height)
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
