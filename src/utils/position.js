export const get2DIndexFrom1D = (pos, width) => ({
  i: Math.floor(pos / width),
  j: pos % width
})

export const get1DIndexFrom2D = (column, row, width) => (
  Number.parseInt(column) + Number.parseInt(row) * width
)
