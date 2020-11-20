import React from 'react'
import PropTypes from 'prop-types'
import Skeleton from '../Placeholders/Skeleton'
import { Root } from './CardContent.styles'

/**
 * The Card Content's component.
 */
const CardContent = props => {
  const { children, loading } = props

  return (
    <Root>
      {loading ? (
        <>
          <Skeleton height={50} margin="0 0 6px" variant="rect" />
          <Skeleton height={10} width="80%" />
        </>
      ) : (
        children
      )}
    </Root>
  )
}

CardContent.defaultProps = {
  loading: false
}
CardContent.propTypes = {
  children: PropTypes.node,
  loading: PropTypes.bool
}

export default CardContent
