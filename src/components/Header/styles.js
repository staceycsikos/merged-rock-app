import styled from 'styled-components'
import { ReactComponent as LogoSVG } from '../../assets/logo.svg'

export const Logo = styled.div`
  height: 40px;
  width: 25%; 
  display: inline;
  color: #FFCD01;
  font-size: 50px;
  font-size: 'Work Sans', sans-serif;
  text-decoration: "none";

  @media (max-width: 800px) {
    height: 33px; 
    width: 222px;
  }
`

export const A = styled.a`
  text-decoration: "none";
`

export const HeaderContainer = styled.header`
  background: #014421;
  padding: 20px 40px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  display: flex;
  position: fixed;
  z-index: 5;

  @media (max-width: 800px) {
    padding: 20px;
  }
`