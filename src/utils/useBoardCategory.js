import { useSmallScreen, useLargeScreen } from './mediaQueries'

const useBoardCategory = () => {
  const isLargeScreen = useLargeScreen()
  const isSmallScreen = useSmallScreen()

  return isLargeScreen ? 'LARGE' : isSmallScreen ? 'SMALL' : 'MEDIUM'
}

export default useBoardCategory
