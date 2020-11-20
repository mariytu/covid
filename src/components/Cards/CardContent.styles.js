import styled from 'styled-components'
import { CardContent } from '@material-ui/core'

export const Root = styled(CardContent)`
  display: flex;
  flex-direction: column;
  padding: 0 16px 24px;

  &.MuiCardContent-root:last-child {
    padding-bottom: 16px;
  }
`
