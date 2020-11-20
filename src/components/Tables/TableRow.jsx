import React from 'react'
import PropTypes from 'prop-types'
import { Root } from './TableRow.styles'

/**
 * The TableRow's component.
 */
const TableRow = props => {
  const { children } = props

  return <Root>{children}</Root>
}

TableRow.propTypes = {
  children: PropTypes.node.isRequired
}

export default TableRow
