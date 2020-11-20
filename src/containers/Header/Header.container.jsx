import React from 'react'
import { Logo, LogoLink, Root } from './Header.styles'

/**
 * The Header's container.
 */
const Header = () => {
  return (
    <Root>
      <LogoLink href="#" target="_top">
        <Logo alt="Chilecompra" src="/assets/images/logo_mercadopublico.svg" />
      </LogoLink>
    </Root>
  )
}

export default Header
