export const initStructure = (height, width, bombCount) => {
  let pos

  const structure = Array.from(
    { length: height * width }, (_, i) => ({ j: i % width + 1, i: Math.floor(i / width) + 1, value: '' })
  )

  for(let i=0; i<bombCount; i+=1){
    pos = Math.floor((Math.random() * height * width))
    structure[pos].value = true

    // update neighbors
    // updateNeighbours()
  }

  return structure
}
