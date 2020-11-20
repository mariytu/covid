import React from 'react'
import PropTypes from 'prop-types'
import Skeleton from '../Placeholders/Skeleton'
import Typography from '../Basics/Typography'
import { Root } from './CardHeader.styles'

/**
 * The Card Header's component.
 */
const CardHeader = props => {
  const { avatar, loading, title } = props

  return (
    <Root
      avatar={loading ? <Skeleton variant="circle" width={40} height={40} /> : avatar}
      title={
        <Typography fontWeight="bold" variant="body1">
          {loading ? <Skeleton /> : title}
        </Typography>
      }
    />
  )
}

CardHeader.defaultProps = {
  loading: false
}
CardHeader.propTypes = {
  avatar: PropTypes.node,
  loading: PropTypes.bool,
  title: PropTypes.string
}

export default CardHeader
