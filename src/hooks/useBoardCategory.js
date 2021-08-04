import { useSmallScreen, useLargeScreen } from '../utils/mediaQueries'

const useBoardCategory = () => {
  const isLargeScreen = useLargeScreen()
  const isSmallScreen = useSmallScreen()

  return isLargeScreen ? 'LARGE' : isSmallScreen ? 'SMALL' : 'MEDIUM'
}

export default useBoardCategory
