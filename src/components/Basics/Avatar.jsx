import React from 'react'
import PropTypes from 'prop-types'
import { Root } from './Avatar.styles'

/**
 * The Avatar's component.
 */
const Avatar = props => {
  const { children, margin, width } = props

  return (
    <Root margin={margin} variant="circle" width={width}>
      {children}
    </Root>
  )
}

Avatar.propTypes = {
  children: PropTypes.node.isRequired,
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default Avatar
