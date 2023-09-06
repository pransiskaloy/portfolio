//Home button found at the center of the page

import React, {useState} from 'react'
import styled from 'styled-components'
import { HomeBtn } from '../components/Svgs'
import { NavLink } from 'react-router-dom'
import HomeBttn from '../assets/Images/home.png'
import HomeBttn2 from '../assets/Images/home2.png'

const Home = styled.button`
position:fixed;
top:2rem;
left:50%;
transform: translate(-50%, 0);

background-color:#FCF6F4;
padding: 0.3rem;
border-radius: 50%;
border: 1px solid #000;
width: 2.5rem;
height:2.5rem;


display: flex;
justify-content:center;
align-items:center;
z-index:3;

cursor:pointer;

&:hover{
    background-color: rgba(110,119,124,0.4);
    box-shadow: 0 0 8px 6px rgba(179,191,205,0.2);
}

&>*:first-child{
    text-decoration:none;
    color:inherit;
}
`

const HomeButton = () => {
  const [over, setOver] = useState(false);
  return (
    <Home>
        <NavLink to="/" onMouseOver={() => setOver(true)} onMouseOut={() => setOver(false)}>
            <img className="pic" width={30} height={30} src={over ? HomeBttn2 : HomeBttn} alt="Home"/>
            {/* <HomeBtn width={30} height={30} fill='currentColor'/> */}
        </NavLink>
    </Home>
  )
}

export default HomeButton