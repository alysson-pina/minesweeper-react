import useMediaQuery from '@material-ui/core/useMediaQuery'

export const useLargeScreen = () => useMediaQuery('(min-width:980px)')
export const useSmallScreen = () => useMediaQuery('(max-width:596px)')
