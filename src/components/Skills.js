import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes'
import {Design, Develope} from './Svgs'
import LogoComponent from '../subComponents/LogoComponent'
import SocialMedia from '../subComponents/SocialMedia'
import HomeButton from '../subComponents/HomeButton'
import ParticleComponent from '../subComponents/ParticleComponent'
import BTS from '../assets/Images/BTS.png'
import CSS from '../assets/Images/CSS.png'
import DART from '../assets/Images/DART.png'
import FGM from '../assets/Images/FGM.png'
import FLT from '../assets/Images/FLT.png'
import FRB from '../assets/Images/FRB.png'
import HTML from '../assets/Images/HTML.png'
import JS from '../assets/Images/JS.png'
import LRV from '../assets/Images/LRV.png'
import PHP from '../assets/Images/PHP.png'
import AI from '../assets/Images/AI.png'
import PS from '../assets/Images/PS.png'
import RJS from '../assets/Images/RJS.png'
import MYSQL from '../assets/Images/MYSQL.png'
import SkillIcon from '../subComponents/SkillIcon'


const Box = styled.div`
background-color: ${props => props.theme.body}
width: 100vw;
height: 100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 70vh;
z-index: 3;
line-height: 1.5;
cursor: pointer;

font-family: "Century Gothic";
display: flex;
flex-direction: column;
justify-content: space-between;
border-radius: 20px;
transition: 0.5s;

&:hover{
  border-radius: 30px;
  color: ${props => props.theme.body};
  background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
diplay: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + .9vw);

${Main}:hover &{
  &>*{
    fill: ${props => props.theme.body};
  }
}

&>*:first-child{
  margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 0.7vw);
padding: 0.5rem 0;
text-align: justify;

strong{
  font-size: 1.3rem;
  maring-bottom: 1rem;
}

ul, p{
  margin-left: 2rem;
}

${Main}:hover &{
  color: ${props => props.theme.body};
}

.icons{
  display:flex;
  flex-direction: row;
  align-items: center;

  img{
    margin-right: 15px;
  }
}

&>*:first-child{
  margin-right: 1rem;
}
`

const Skills = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme='light'/>
        <SocialMedia theme='light'/>
        <HomeButton />
        <ParticleComponent theme='light'/>

        <Main>
          <Title>
            <Design width={40} height={40}/>Graphic Design
          </Title>
          <Description>
            I love creating designs that communicate effectively, maintaining a clean, minimal, and simple aesthetic.
          </Description>
          <Description>
            <strong>I like to Design</strong>
            <ul>
              <li>
                Websites
              </li>
              <li>
                Mobile Applications
              </li>
              <li>
               Graphics  &#40;Logo, Illustrations and Print&#41;
              </li>
            </ul>
          </Description>
          <Description>
            <strong>Tools</strong>
            <span className="icons">
              <SkillIcon wid={40} heig={40} imgIcon={FGM} prodName="Figma" bodyText="Cloud-based design tool for real-time collaboration on user interfaces and interactive designs."/>
              <SkillIcon wid={40} heig={40} imgIcon={PS} prodName="Adobe Photoshop" bodyText="image editing software for designers and photographers, offering powerful tools for editing, retouching, and graphic design."/>
              <SkillIcon wid={40} heig={40} imgIcon={AI} prodName="Adobe Illustrator" bodyText="Leading vector graphics software for designers, perfect for creating scalable and precise illustrations, logos, and graphics."/>
            </span>
          </Description>
        </Main>
        <Main>
          <Title>
            <Develope width={40} height={40}/> Software Developer
          </Title>
          <Description>
            I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.
          </Description>
          <Description>
            <strong>Front-End Development</strong>
            <span className="icons">
              <SkillIcon wid={40} heig={40} imgIcon={HTML} prodName="HTML" bodyText="HTML stands for 'Hypertext Markup Language.' It is the standard markup language used to create and structure content on the World Wide Web. "/>
              <SkillIcon wid={40} heig={40} imgIcon={CSS} prodName="CSS" bodyText="CSS stands for 'Cascading Style Sheets.' It is a style sheet language used in web development to define the presentation and layout of HTML elements on a web page."/>
              <SkillIcon wid={50} heig={40} imgIcon={BTS} prodName="Bootstrap" bodyText="A popular front-end framework for web development that provides pre-designed, responsive components and styles to help developers create attractive and mobile-friendly websites quickly."/>
              <SkillIcon wid={40} heig={40} imgIcon={JS} prodName="Javascript" bodyText="A versatile and widely used programming language for web development, enabling interactive and dynamic features on websites, including animations, form validation, and real-time updates."/>
              <SkillIcon wid={40} heig={40} imgIcon={RJS} prodName="ReactJS" bodyText="A powerful JavaScript library for building user interfaces, known for its component-based architecture, reusability, and efficiency in creating dynamic web applications."/>
            </span>
          </Description>
          <Description>
            <strong>Back-End Development</strong>
            <span className="icons">
              <SkillIcon wid={50} heig={30} imgIcon={PHP} prodName="PHP" bodyText="A server-side scripting language widely used for web development, allowing developers to create dynamic and interactive websites and web applications by processing data and generating HTML content on the server."/>
              <SkillIcon wid={40} heig={40} imgIcon={LRV} prodName="LARAVEL" bodyText="A popular and efficient PHP web application framework known for its elegant syntax, robust features, and developer-friendly tools, making it a top choice for building scalable and maintainable web applications."/>
              <SkillIcon wid={60} heig={40} imgIcon={MYSQL} prodName="MySQL" bodyText="An open-source relational database management system (RDBMS) used for storing, managing, and retrieving structured data in various web applications and software, known for its reliability and scalability."/>
            </span>
          </Description>
          <Description>
            <strong>Mobile Development</strong>
            <span className="icons">
              <SkillIcon wid={40} heig={40} imgIcon={DART} prodName="Dart" bodyText="A programming language developed by Google, mainly used for building web and mobile applications, especially in conjunction with the Flutter framework for creating cross-platform apps with a single codebase."/>
              <SkillIcon wid={40} heig={40} imgIcon={FLT} prodName="Flutter" bodyText=" An open-source UI framework by Google for building natively compiled applications for mobile, web, and desktop from a single codebase. It's known for its fast development and expressive, flexible UI design capabilities."/>
            </span>
          </Description>
          <Description>
            <strong>Database and Backend-as-a-Service BaaS</strong>
            <span className="icons">
              <SkillIcon wid={30} heig={40} imgIcon={FRB} prodName="Firebase" bodyText="A comprehensive mobile and web application development platform provided by Google, offering a range of services, including real-time database, authentication, hosting, and more, to simplify and accelerate the development process while ensuring scalability and real-time capabilities."/>
            </span>
          </Description>
        </Main>
      </Box>
    </ThemeProvider>
  )
}

export default Skills