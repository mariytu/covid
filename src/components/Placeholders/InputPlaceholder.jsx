import React from 'react'
import PropTypes from 'prop-types'
import Skeleton from './Skeleton'
import { Root } from './InputPlaceholder.styles'

/**
 * The InputPlaceholder's component.
 */
const InputPlaceholder = props => {
  const { margin } = props

  return (
    <Root margin={margin}>
      <Skeleton height="14px" margin="0 0 0.5rem" variant="rect" width="70%" />
      <Skeleton height="38px" margin="0 0 0.5rem" variant="rect" width="100%" />
    </Root>
  )
}

InputPlaceholder.defaultProps = {
  margin: '4px 0 20px'
}
InputPlaceholder.propTypes = {
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default InputPlaceholder
