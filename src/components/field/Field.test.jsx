import { act, fireEvent, render, screen } from '@testing-library/react'

import Field from '.'

const TestComponent = ({
  value = 1,
  won = false,
  lost = false,
  setLost = jest.fn(),
  row = 0,
  column = 0,
  revealNeighborhood = jest.fn(),
  updateBombCount = jest.fn()
}) => (
    <Field
      value={value}
      won={won}
      lost={lost}
      row={row}
      column={column}
      setLost={setLost}
      revealNeighborhood={revealNeighborhood}
      updateBombCount={updateBombCount}
    />
)

describe('Field specs', () => {
  it('renders by default in unclicked state', () => {
    render(<TestComponent />)

    const field = screen.getByTestId('minefield')

    expect(field).toBeInTheDocument()
    expect(field.className).toContain('unclicked')
  })

  it('shows value after being clicked', () => {
    render(<TestComponent />)

    const field = screen.getByTestId('minefield')

    expect(field.className).not.toContain('one') // no info revealed yet

    fireEvent.click(field)

    expect(field.className).toContain('one')
  })

  it('shows bomb and calls setLost callback', () => {
    const setLost = jest.fn()

    render(<TestComponent value='B' setLost={setLost} />)

    const field = screen.getByTestId('minefield')

    fireEvent.click(field)

    expect(field.className).toContain('bomb')
    expect(setLost).toHaveBeenCalledWith(true)
  })

  it('does not call setLost if its not a bomb', () => {
    const setLost = jest.fn()

    render(<TestComponent setLost={setLost} />)

    const field = screen.getByTestId('minefield')

    fireEvent.click(field)

    expect(setLost).not.toHaveBeenCalledWith(true)
  })

  it('places flag in case of right click and only call to update number of bombs', () => {
    const updateBombCount = jest.fn()
    const setLost = jest.fn()

    render(<TestComponent setLost={setLost} updateBombCount={updateBombCount} />)

    const field = screen.getByTestId('minefield')

    fireEvent.contextMenu(field)

    expect(field.className).toContain('flag')
    expect(setLost).not.toHaveBeenCalledWith(true)
    expect(updateBombCount).toHaveBeenCalledWith(true, false)
  })

  it('reverts back to undiscovered state in case of two right clicks', () => {
    const updateBombCount = jest.fn()

    render(<TestComponent updateBombCount={updateBombCount} />)

    const field = screen.getByTestId('minefield')

    fireEvent.contextMenu(field)
    fireEvent.contextMenu(field)

    expect(field.className).toContain('unclicked')
    expect(field.className).not.toContain('flag')
    expect(updateBombCount).toHaveBeenCalledWith(false, false)
  })

  it('displays crossed bomb when game ends and it was flagged by mistake', () => {
    const { rerender } = render(<TestComponent />)

    const field = screen.getByTestId('minefield')

    fireEvent.contextMenu(field) // simulate right click to set Flag

    rerender(<TestComponent lost />)

    act(() => {
      expect(field.className).toContain('mistakenBomb')
      expect(field.className).not.toContain('flag')
    })
  })

  it('reveals its content when game ends', async () => {
    const { rerender } = render(<TestComponent />)

    const field = screen.getByTestId('minefield')

    rerender(<TestComponent lost />)

    act(() => {
      expect(field.className).toContain('one')
      expect(field.className).not.toContain('unclicked')
    })
  })

  it('resets back to original state if lost prop is set back to false', async () => {
    const { rerender } = render(<TestComponent lost />)

    const field = screen.getByTestId('minefield')

    rerender(<TestComponent lost={false} />)

    act(() => {
      expect(field.className).not.toContain('one')
      expect(field.className).toContain('unclicked')
    })
  })
})
