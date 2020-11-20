import React from 'react'
import BrandLayout from '../components/Layouts/BrandLayout'
import CovidSummarySectionContainer from '../containers/CovidSummarySection/CovidSummarySection.container'
import HeaderContainer from '../containers/Header/Header.container'
import { Root } from './CovidSummary.styles'

/**
 * The Covid Summary's page.
 */
const CovidSummary = () => (
  <BrandLayout header={<HeaderContainer />}>
    <Root>
      <CovidSummarySectionContainer />
    </Root>
  </BrandLayout>
)

export default CovidSummary
