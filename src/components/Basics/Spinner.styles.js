import styled from 'styled-components'
import { CircularProgress } from '@material-ui/core'

export const Root = styled(CircularProgress)`
  color: ${props => props.theme.palette.primary.main};
`
