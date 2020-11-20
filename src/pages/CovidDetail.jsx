import React from 'react'
import BrandLayout from '../components/Layouts/BrandLayout'
import CovidDetailSectionContainer from '../containers/CovidDetailSection/CovidDetailSection.container'
import HeaderContainer from '../containers/Header/Header.container'
import { Root } from './CovidDetail.styles'

/**
 * The Covid Detail's page.
 */
const CovidDetail = () => (
  <BrandLayout header={<HeaderContainer />}>
    <Root>
      <CovidDetailSectionContainer />
    </Root>
  </BrandLayout>
)

export default CovidDetail
