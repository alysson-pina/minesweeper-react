export const createRightClickEventForElement = (element) => {
  return new MouseEvent('contextmenu', {
    bubbles: true,
    cancelable: false,
    view: window,
    button: 2,
    buttons: 0,
    clientX: element?.getBoundingClientRect().x,
    clientY: element?.getBoundingClientRect().y
  })
}

export const NAVIGATION_KEYS = Object.freeze(['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'])
