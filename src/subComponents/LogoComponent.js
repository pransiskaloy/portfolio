import React from 'react'
import styled from 'styled-components'
import { darkTheme } from '../components/Themes'
import Pk from '../assets/Images/pk.png'
import Pkl from '../assets/Images/pkLight.png'
import { NavLink } from 'react-router-dom'

const Logo = styled.h1`
    display:inline-block;
    color: ${props => props.color === 'dark' ? darkTheme.text :darkTheme.body};
    font-family: 'Ysabeau';

    position:fixed;
    left:4rem;
    top:2rem;
    z-index:3;
`


const LogoComponent = (props) => {
  return (
    <Logo color={props.theme}>
        <NavLink to="/">
          <img className="pic" height={70} width={70} src={props.theme === "dark" ? Pkl : Pk} alt="Profile"/>
        </NavLink>
    </Logo>
  )
}

export default LogoComponent