export const get2DIndexFrom1D = (pos, width) => ({
  j: Math.floor(pos / width),
  i: pos % width
})

export const get1DIndexFrom2D = (i, j, width) => (Number.parseInt(i) + Number.parseInt(j) * width)
