import React from 'react'
import PropTypes from 'prop-types'
import { Root } from './Card.styles.jsx'

/**
 * The Card's component.
 */
const Card = props => {
  const { children, margin, padding, width } = props

  return (
    <Root margin={margin} padding={padding} width={width}>
      {children}
    </Root>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default Card
