import { useMediaQuery, useTheme } from '@material-ui/core'

/**
 * Custom hook to check the viewport size.
 */
export const useViewportSize = () => {
  const theme = useTheme()
  const tiny = useMediaQuery(theme.breakpoints.down('md'))
  const small = useMediaQuery(theme.breakpoints.between('sm', 'md'))
  const desktop = useMediaQuery(theme.breakpoints.up('md'))

  return { isMedium: desktop, isSmall: small, isTiny: tiny && !desktop }
}
