import React from 'react'
import styled from 'styled-components'
import img from "../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg"
import LogoComponent from '../subComponents/LogoComponent'
import HomeButton from '../subComponents/HomeButton'
import SocialMedia from '../subComponents/SocialMedia'

import {Blogs} from '../data/BlogData'
import BlogComponents from './BlogComponents'

const BlogContainer = styled.div`
background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
`

const Container = styled.div`
background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
width: 100%;
height: auto;
position: relative;
padding-bottom: 5rem;
`
const  Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top:10rem;
`

const Grid  = styled.div`
display:grid;
grid-template-columns:  repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 2vw);
`

const Blog = () => {
  return (
    <BlogContainer>
      <Container>
        <LogoComponent/>
        <HomeButton/>
        <SocialMedia/>
        <Center>
          <Grid>
            {Blogs.map(blog => {
              return <BlogComponents key={blog.id} blog={blog}/>
            })}
          </Grid>
        </Center>
      </Container>
    </BlogContainer>
  )
}

export default Blog