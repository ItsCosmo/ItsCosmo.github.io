import React, { useContext } from 'react'
import { Box, Image, Anchor, Nav, ResponsiveContext } from 'grommet';
import { Link, useNavigate } from 'react-router-dom'

import Breadcrumb from './Breadcrumb'

const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const MainHeader = (props) => { 
  const size = useContext(ResponsiveContext);
  const navigate = useNavigate();
  const title =  (
    <Box direction="row" height="xsmall">      
        <Image src="/Monogram.png" onClick={() => {navigate('/') }} style={{ cursor: "pointer" }} />
        { size !== 'small' 
          && size !== 'xsmall'
          && <Image src="/kleimeyer.png" />
        }  
    </Box>
);     

  return (
      <Box direction="column">
        <Box
          direction="row"
          justify="between"
          align="center"
          background={{ dark: "dark-1", light: "#faf9f6" }}
          pad={{ left: "medium", right: "medium", vertical: "small" }}
        >
          { title }
          <Nav direction="row">
            {navItems.map((item) => (
              <Link to={item.href} key={item.label}>
                <Anchor as="span" label={item.label} />
              </Link>
            ))}
          </Nav>
        </Box>
      </Box>
  )
}

export default MainHeader