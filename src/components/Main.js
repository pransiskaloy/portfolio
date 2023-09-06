import React, { useState } from 'react'
import styled, {keyframes} from 'styled-components'
import HomeButton from '../subComponents/HomeButton'
import LogoComponent from '../subComponents/LogoComponent'
import SocialMedia from '../subComponents/SocialMedia'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
// import { YinYang } from './Svgs'
import ShadedIntro from './ShadedIntro'
import { motion } from 'framer-motion'
import Pk from '../assets/Images/pk.png'

const MainContainer = styled.div`
  background: ${props => props.theme.body};
  width:100vw;
  height:100vh;
  overflow:hidden;

  position:relative;
  h2,h3,h4,h5,h6{
    font-family:'Karla',sans-serif;
    font-weight:500;
  }
`
const Container  = styled.div`
padding:2rem;
`

const Contact = styled(NavLink)`
  color: ${props => props.theme.text};
  position: absolute;
  top:2rem;
  right: calc(1rem + 2vw);
  text-decoration:none;
  z-index:1;
`
const Works = styled(NavLink)`
  color: ${props => props.click ? props.theme.body : props.theme.text};
  position: absolute;
  top:50%;
  left: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%,-50%);
  text-decoration:none;
  z-index:1;
`
// const Blogs = styled(NavLink)`
//   color: ${props => props.theme.text};
//   position: absolute;
//   top:50%;
//   right: calc(1rem + 2vw);
//   transform:  translate(-50%,-50%) rotate(-90deg);
//   text-decoration:none;
//   z-index:1;
// `
const Skills = styled(NavLink)`
  // color: ${props => props.theme.text};
  // text-decoration:none;
  // z-index:1;
  color: ${props => props.theme.text};
  position: absolute;
  top:50%;
  right: calc(1rem + 2vw);
  transform:  translate(-50%,-50%) rotate(-90deg);
  text-decoration:none;
  z-index:1;
`

const BottomBar = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;

`
const About = styled(NavLink)`
  color: ${props => props.click ? props.theme.body : props.theme.text};
  text-decoration:none;
  z-index:1;
`

const rotate = keyframes`
from{
  transform: rotate(0);
}
to{
  transform: rotate(360deg);
}
`
const Center = styled.button`
  position: absolute;
  top: ${props => props.click ? '85%':'50%'};
  left: ${props => props.click ? '92%':'50%'};
  transform: translate(-50%,-50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // show animation
  transition: all 1s ease;

  //the rotating logo
  &>:first-child{
    animation: ${rotate} infinite 1.5s linear;
  }

  //the word click me
  &>:last-child{
    display: ${props => props.click ? 'none':'inline-block'};
    padding-top: 1rem;
  }
`
const ShadeDiv = styled.div`
position: absolute;
background-color: #6E777C;
top: 0;
bottom: 0;
right: 50%;
width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index: 1;

//display the shaded container left side
transition: height 0.5s ease, width 1s ease 0.5s;
`

// 2:24:16 https://www.youtube.com/watch?v=jcohAIaSy2M&t=2s&ab_channel=CodeBucks
const Main = () => {

  const [click, setClick] = useState(false)


  const handleClick = () => setClick(!click)


  return (
    <MainContainer>
      
      <Container>
        <LogoComponent theme={click ? 'dark' : 'light'}/>
        {/* <HomeButton/> */}
        <Contact target="_blank" to={{pathname:"mailto:bagas.francis.carlo.t@gmail.com"}}>
          <motion.h3
          
          //motion in framer-motion na package
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}

          >
          Say  Hi!
          </motion.h3>
        </Contact>
        <ShadeDiv click={click}/>
        <Works to="/work" click={click}>
          <motion.h3

          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
          >
            Work
          </motion.h3>
        </Works>

        <Center click={click}>
          <img className="pic" onClick={()=> handleClick()} width={click ? 120 : 200} height={click ? 120 : 200}  src={Pk} alt="Profile"/>
          {/* <YinYang onClick={()=> handleClick()} width={click ? 120 : 200} height={click ? 120 : 200} fill='currentColor'/> */}
          <span>Click Me!</span>
        </Center>
        {/* <Blogs to="/blog">
          <motion.h3

            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            >
            Blog
          </motion.h3>
        </Blogs> */}
        <Skills to="/skills">
            <motion.h3

            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            >Skills</motion.h3>
          </Skills>

        <SocialMedia theme={click ? 'dark' : 'light'}/>

        <BottomBar>
          <About to="/about" click={click}>
            <motion.h3

              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.9}}
              >Abou<span style={{color: "#6E777C"}}>t Me!</span></motion.h3>
          </About>
          {/* <Skills to="/skills">
            <motion.h3

            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            >Skills</motion.h3>
          </Skills> */}
        </BottomBar>
        {click ? <ShadedIntro/> : null}
      </Container>
    </MainContainer>
  )
}

export default Main