import styled from 'styled-components'
import { Avatar } from '@material-ui/core'

export const Root = styled(Avatar)`
  background-color: ${props => props.theme.palette.primary.light};
  color: ${props => props.theme.palette.primary.main};
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeights[700]};
  margin: ${props => props.margin};
  width: ${props => props.width || '40px'};
`
