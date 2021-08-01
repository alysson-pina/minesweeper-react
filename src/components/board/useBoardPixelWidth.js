import useBoardCategory from '../../utils/useBoardCategory'

const useBoardPixelWidth = () => {
  const boardCategory = useBoardCategory()

  switch(boardCategory) {
    case 'SMALL': 
      return '352px'
    case 'MEDIUM':
      return '516px'
    default:
      return '970px'
  }
}

export default useBoardPixelWidth
