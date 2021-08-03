import { get1DIndexFrom2D } from "./position"

// detects which field was targeted by event e
export const detectFieldPosition = (e, width) => {
  if(!e || !e.target) {
    return
  }

  const el = e.target
  let rowI, columnJ

  el.classList.forEach((className) => {
    const matched = className.match(/row(\d{1,2})_column(\d{1,2})/)
    if(matched) {
      [, rowI, columnJ] = matched
    }
  })

  if(!rowI || !columnJ) { // couldn't detect which field is it
    return
  }

  const rowIZeroBased = rowI - 1
  const columnJZeroBased = columnJ - 1

  return [get1DIndexFrom2D(columnJZeroBased, rowIZeroBased, width), rowI, columnJZeroBased]
}
