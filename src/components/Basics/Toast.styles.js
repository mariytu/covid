import styled from 'styled-components'
import { Alert } from '@material-ui/lab'

export const Root = styled(Alert)`
  color: ${props => props.theme.palette.blackGrayBrand.black1};
  background-color: ${({ severity, theme }) => theme.palette[severity].light};
  border: 1px solid ${({ severity, theme }) => theme.palette[severity].main};
  border-radius: 0;
  font-size: 14px;
  justify-content: ${props => {
    switch (props.align) {
      case 'center':
      case 'inherit':
        return props.align
      case 'right':
        return 'flex-end'
      case 'left':
      default:
        return 'flex-start'
      case 'justify':
        return ''
    }
  }};
  letter-spacing: 0;
  line-height: 18px;
  margin: ${props => props.margin};
  padding: 9px 17px;
  width: ${props => props.width || 'auto'};

  & .MuiAlert-icon,
  & .MuiAlert-message {
    padding: 0;
  }

  & .MuiAlert-icon {
    margin: 2px 12px 0 0;
  }
`
