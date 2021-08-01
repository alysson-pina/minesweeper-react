import useBoardCategory from '../../utils/useBoardCategory'

const useBombCount = () => {
  const boardCategory = useBoardCategory()

  switch(boardCategory) {
    case 'SMALL': 
      return 36
    case 'MEDIUM':
      return 52
    default:
      return 99
  }
}

export default useBombCount
