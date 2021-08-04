import { SMALL, MEDIUM, LARGE } from '../utils/sizes'
import useBoardCategory from './useBoardCategory'

const useWidth = () => {
  const boardCategory = useBoardCategory()

  switch(boardCategory) {
    case 'SMALL': 
      return SMALL
    case 'MEDIUM':
      return MEDIUM
    default:
      return LARGE
  }
}

export default useWidth
