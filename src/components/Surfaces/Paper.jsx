import React from 'react'
import PropTypes from 'prop-types'
import { Root } from './Paper.styles.jsx'

/**
 * The Paper's component.
 */
const Paper = props => {
  const { border, boxShadow, children, color, display, justifyContent, margin, padding, textAlign, width } = props

  return (
    <Root
      border={border ? 1 : 0}
      boxShadow={boxShadow ? 1 : 0}
      color={color}
      display={display}
      justifyContent={justifyContent}
      margin={margin}
      padding={padding}
      textAlign={textAlign}
      width={width}
    >
      {children}
    </Root>
  )
}

Paper.defaultProps = {
  border: false,
  boxShadow: false,
  color: undefined,
  display: 'block',
  justifyContent: 'initial',
  textAlign: undefined,
  width: 'initial'
}
/**
 * Paper material UI options like classes, component, elevation, squeare and variant are not supported yet.
 * If you need to support any of these options, you can use the spread operator or define the corresponding property.
 * For further information check the link https://material-ui.com/api/paper/
 */
Paper.propTypes = {
  border: PropTypes.bool,
  boxShadow: PropTypes.bool,
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['gray', 'blue']),
  display: PropTypes.string,
  justifyContent: PropTypes.string,
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  textAlign: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default Paper
