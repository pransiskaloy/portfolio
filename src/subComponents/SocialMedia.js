import React from 'react'
import { Facebook, Github, Twitter, YouTube } from '../components/Svgs'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {darkTheme} from '../components/Themes'

const Icons = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 4rem;
    z-index:3;

    &>*::not(:last-child){
        margin: 0.5rem 0;
    }
`

const Line = styled.span`
    width:2px;
    height: 8rem;
    background-color: ${props => props.color === 'dark' ? darkTheme.text : darkTheme.body};
    
`
const SocialMedia = (props) => {
  return (
    <Icons>
        <div>
            <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://github.com/pransiskaloy"}}>
                <Github width={25} height={25} fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body}/>
            </NavLink> 
        </div> <br/>
        <div>
            <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://twitter.com/carlo_bagas"}}>
                <Twitter width={25} height={25} fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body}/>
            </NavLink>
        </div><br/>
        <div>
            <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://facebook.com/franciz123"}}>
                <Facebook width={25} height={25} fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body}/>
            </NavLink>
        </div><br/>
        {/* <div>
            <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://github.com/pransiskaloy"}}>
                <YouTube width={25} height={25} fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body}/>
            </NavLink>
        </div><br/> */}

        <Line color={props.theme}/>
    </Icons>
    
  )
}

export default SocialMedia