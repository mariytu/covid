import React from 'react'
import PropTypes from 'prop-types'
import { Root } from './Toast.styles'

/**
 * The Toast's component.
 */
const Toast = props => {
  const { align, children, margin, severity, width, withIcon } = props

  return (
    <Root
      align={align}
      icon={withIcon ? <img alt="alert icon" src={`/assets/images/${severity}_icon.svg`} /> : false}
      margin={margin}
      severity={severity}
      width={width}
    >
      {children}
    </Root>
  )
}

Toast.defaultProps = {
  align: 'inherit',
  severity: 'info',
  width: 'auto',
  withIcon: true
}
Toast.propTypes = {
  align: PropTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),
  children: PropTypes.node.isRequired,
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  severity: PropTypes.oneOf(['error', 'info', 'success', 'warning']),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  withIcon: PropTypes.bool
}

export default Toast
