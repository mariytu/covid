import React from 'react'
import PropTypes from 'prop-types'
import { Root } from './Spinner.styles'

/**
 * The Spinner's component.
 */
const Spinner = props => {
  const { size } = props

  return <Root size={size} />
}

Spinner.defaultProps = {
  size: 40
}
Spinner.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default Spinner
