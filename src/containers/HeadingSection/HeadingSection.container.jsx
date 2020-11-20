import React from 'react'
import { useViewportSize } from '../../modules/hooks/viewport'
import Breadcrumbs from '../../components/Navigation/Breadcrumbs'
import { Navigation, Root } from './HeadingSection.styles'
import Typography from '../../components/Basics/Typography'
import PropTypes from 'prop-types'

/**
 * The HeadingSection's container.
 */
const HeadingSection = ({ breadcrumbs, title, subtitle }) => {
  const { isNotSoSMall, isMedium } = useViewportSize()

  return (
    <Root>
      {(isNotSoSMall || isMedium) && (
        <Navigation>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </Navigation>
      )}
      <Typography fontWeight="bold" margin="2.3rem 0 0.2rem" variant="h2">
        {title}
      </Typography>
      {subtitle && <Typography variant="body2">{subtitle}</Typography>}
    </Root>
  )
}

HeadingSection.defaultProps = {
  breadcrumbs: [],
  title: ''
}

HeadingSection.propTypes = {
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      isExternal: PropTypes.bool,
      link: PropTypes.string,
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

export default HeadingSection
