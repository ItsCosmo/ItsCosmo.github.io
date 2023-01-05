import React from 'react'
import { Box } from 'grommet'
import Breadcrumb from './Breadcrumb'

const About = () => { 
  const crumbs = [
    { tag: "Home", link: "/" },
    { tag: "About" }
  ]
    
  return (
    <Box>
        <Breadcrumb crumbs={crumbs} />
        <h1>About Page</h1>
    </Box>
  )
}

export default About
