import React from 'react'
import { Logo, HeaderContainer, A } from './styles'

const Header = ({children}) => (
  <HeaderContainer>
    <A
      style={{textDecoration: 'none'}}
      href='/'>
      <Logo title="Peak Scout Logo">Peak Scout</Logo>
    </A>
    {children}
  </HeaderContainer>


)

export default Header