import React from 'react'
import BrandLayout from '../components/Layouts/BrandLayout'
import HeaderContainer from '../containers/Header/Header.container'
import { Image404, Root, Text } from './NotFound.styles'

/**
 * The NotFound' page.
 */
const NotFound = () => (
  <BrandLayout header={<HeaderContainer />}>
    <Root>
      <Text>The requested page doesn't exist</Text>
      <Image404 alt="The requested page doesn't exist" src="/assets/images/404.svg" />
    </Root>
  </BrandLayout>
)

export default NotFound
