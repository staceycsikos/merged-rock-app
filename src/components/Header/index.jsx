import {useState, useEffect} from 'react'
import { Logo, HeaderContainer, A } from './styles'

export default function Header({ children, userName, signedIn}) {
  // const [user, setUser] = useState("")
  // useEffect(() => {
  //   setUser(userName)
  // }, [userName])

  return(
    < HeaderContainer >
    <A
      style={{ textDecoration: 'none' }}
      href='/'>
      <Logo title="Peak Scout Logo">Peak Scout</Logo>
    </A>
  { children }
      <h1>Hello {signedIn ? ", " + userName : null}</h1>
  </HeaderContainer >
  )


}

