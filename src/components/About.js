import React from 'react'
import styled, { ThemeProvider, keyframes } from 'styled-components'
import {darkTheme} from './Themes'
import LogoComponent from '../subComponents/LogoComponent'
import SocialMedia from '../subComponents/SocialMedia'
import HomeButton from '../subComponents/HomeButton'
import ParticleComponent from '../subComponents/ParticleComponent'
import astronaut from '../assets/Images/spaceman.png'


const Box = styled.div`
// background-color: ${props => props.theme.body};
background: radial-gradient(666px at 0.4% 48%, rgb(202, 204, 227) 0%, ${props => props.theme.body} 80.5%);
width: 100vw;
height: 100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% {transform: translateY(-10px)}
50% {transform: translateY(15px) translateX(15px)}
100% {transform: translateY(-10px)}

`

const Spaceman = styled.div`
position: absolute;
top: 20%;
right: 15%;
width: 20vw;
animation: ${float} 4s ease infinite;

img{
  width: 170%;
  heigh: auto;
}
`
const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
padding: 2rem;
width: 50vw;
height: 60vh;
z-index: 3;
line-height: 1.5;
border-radius: 20px;
h2{
  font-size: 90px;
}

display: flex;
flex-direction: column;
justify-content: space-around;
font-size: calc(0.6rem + 1vw);
backdrop-filter: blur(4px);

position: absolute;
left: calc(5rem + 5vw);
top:10rem;

font-family: 'Ubuntu Mono', monospace;
font-style: italic;
text-align: justify;
`
const About = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <LogoComponent theme='dark'/>
        <SocialMedia theme='dark'/>
        {/* <HomeButton /> */}
        <ParticleComponent theme='dark'/>

        <Spaceman>
          <img src={astronaut} alt="spaceman"/>
        </Spaceman>

        <Main>
          {/* <span>
            I'm truly passionate about crafting captivating digital experiences. I've got a knack for making websites and mobile apps not just work, but work beautifully. Whether it's designing with a keen eye or writing efficient code, I'm all about turning ideas into user-friendly magic. So, take a stroll through my portfolio and witness the blend of creativity and tech that defines my work.
          </span>
          <span>
            If you're as excited about digital creativity as I am, let's connect! Hit me up on social media, stay inspired, and let's dive deep into the exciting world of web and Android development together!
          </span> */}
          <h2>It's Me!</h2>
          <span>
            Passionate about crafting captivating digital experiences, making websites and apps both functional and beautiful. I specialize in turning ideas into user-friendly magic through design and efficient code. 
            <br/><br/>
            Explore my portfolio to see the fusion of creativity and tech that defines my work. Let's connect and explore the exciting world of web and Android development together!
          </span>
        </Main>
      </Box>
    </ThemeProvider>
  )
}

export default About