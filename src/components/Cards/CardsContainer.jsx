import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'
import CardContent from './CardContent'
import CardHeader from './CardHeader'
import { Root } from './CardsContainer.styles'

/**
 * The Cards Container' component.
 */
const CardsContainer = props => {
  const { cardWidth, children, loading, margin, padding } = props

  // FIXME: https://github.com/eslint/eslint/issues/6606
  return (
    <Root margin={margin} padding={padding}>
      {
        /* eslint-disable indent */
        loading
          ? Array.from(Array(6), (value, index) => {
              return (
                <Card key={index} width={cardWidth}>
                  <CardHeader loading />
                  <CardContent loading />
                </Card>
              )
            })
          : children
      }
    </Root>
  )
}

CardsContainer.defaultProps = {
  cardWidth: '300px',
  loading: false
}
CardsContainer.propTypes = {
  cardWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default CardsContainer
