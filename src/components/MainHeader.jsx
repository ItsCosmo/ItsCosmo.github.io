import React, { useContext } from 'react'
import { Box, Image, Anchor, Nav, ResponsiveContext } from 'grommet';

const navItems = [
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#' },
];

const MainHeader = (props) => { 
  const size = useContext(ResponsiveContext);
  const title =  (
    <Box direction="row" height="xsmall">
        <Image src="/Monogram.png" />
        { size !== 'small' 
          && size !== 'xsmall'
          && <Image src="/kleimeyer.png" />
        }  
    </Box>
);     

  return (
      <Box
        direction="row"
        justify="between"
        align="center"
        background={{ dark: "dark-1", light: "#faf9f6" }}
        pad={{ left: "medium", right: "small", vertical: "small" }}
      >
        { title }
        <Nav direction="row">
          {navItems.map((item) => (
            <Anchor href={item.href} label={item.label} key={item.label} />
          ))}
        </Nav>
      </Box>
  )
}

export default MainHeader