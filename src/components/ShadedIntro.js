import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import Me from '../assets/Images/profile-img.png'
import Typewriter from 'typewriter-effect';



const Box = styled(motion.div)`

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);


    width: 75vw;
    height: 55vh;
    display: flex;

    //creates the 2 color border
    background: linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%) bottom,
        linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%) top;
    
    background-repeat: no-repeat;
    background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};
    z-index: 1;
`

const SubBox = styled.div`
    width: 70%;
    position: relative;
    display: flex;

    .pic{
      position: absolute;
      bottom: 0;
      left: 40%;
      transform: translate(-50%, 0%);
      width: 100%;
      height: auto;
    }
`

const Text = styled(motion.div)`
    font-size: calc(1em + 1.5vw);
    color: ${props => props.theme.body};
    padding: 2rem;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

`
const Greetings = styled.div`
font-family: "Century Gothic";
font-size:calc(0.5em + 1vw);
color:  ${props => `rgba(${props.theme.bodyRgba},1)`};
.myName{
  color:  ${props => `rgba(${props.theme.bodyRgba},1)`};
  font-size:calc(1.3em + 2.7vw);
  line-height: 60pt;
  letter-spacing: -5px;
  font-weight: bold;
}
.position{
  display: flex;
  flex-direction: row;
}
&>*:last-child{
  color:  ${props => `rgba(${props.theme.bodyRgba},0.8)`};
  font-size: calc(0.5em + 1.5vw);
}
`
const ShadedIntro = () => {
  return (
    <Box
      initial={{height:0}}
      animate={{height:'55vh'}}
      transition={{type: 'spring',duration: 2, delay: 1}}
    >
      <SubBox>
        <Text
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1, delay: 1}}>
          <Greetings> Hello,  I am<br/><span className='myName'>pransiskaloy</span> <br/><br/>
          <span className="position">
            <Typewriter
                options={{
                  strings: ["A <strong> Web Developer.<strong>", 'An <strong>Android Developer.</strong> ', 'A <strong>Graphic Designer.</strong>'],
                  autoStart: true,
                  loop: true,
                }}
                methods={{changeDeleteSpeed: 0.5}}
                /> 
              </span>
          </Greetings>
          
        </Text>
      </SubBox>
      <SubBox>
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1, delay: 2}}
        >
          <img className="pic" src={Me} alt="Profile"/>
        </motion.div>
      </SubBox>
    </Box>
  )
}

export default ShadedIntro