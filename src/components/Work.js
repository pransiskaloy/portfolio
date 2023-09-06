import React from 'react'
import styled, { ThemeProvider} from 'styled-components'
import {darkTheme} from './Themes'
import LogoComponent from '../subComponents/LogoComponent'
import SocialMedia from '../subComponents/SocialMedia'
import HomeButton from '../subComponents/HomeButton'
import { Work } from '../data/WorkData'
import WorkCard from '../subComponents/WorkCard'
import './login.css'

const Box = styled.div`
// background-color: ${props => props.theme.body};
background: radial-gradient(666px at 0.4% 48%, rgb(202, 204, 227) 0%, ${props => props.theme.body} 80.5%);
width: 100vw;
height: 100vh;
position: relative;
// overflow: hidden;
`

const Main = styled.ul`
position: fixed;
top: 12rem;
left: calc(10rem + 15vw);
height: 40vh;
display: flex;
color: white;
`
const Works= () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <LogoComponent theme='dark'/>
        <SocialMedia theme='dark'/>
        <HomeButton />

        <Main>
          {
           Work.map( d => 
            <WorkCard key={d.id} data={d}/>
           )
          }
        </Main>
      </Box>
    </ThemeProvider>
  )
}

export default Works