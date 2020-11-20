import styled from 'styled-components'
import { Skeleton } from '@material-ui/lab'
import { hexToRGBA } from '../../modules/utils/color'

export const Root = styled(Skeleton)`
  background-color: ${props => hexToRGBA(props.theme.palette.brand.shuttleGray, 0.2)};
  border-radius: ${props => (props.variant === 'circle' ? '50%' : '3px')};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`
