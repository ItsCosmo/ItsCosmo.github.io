import React from 'react'
import { Link } from 'react-router-dom'
import { Anchor, Box, Text } from 'grommet'

const Breadcrumb = ({ crumbs }) => {
  return (
    <Box direction="row">
      { crumbs.map((crumb, index) => {
        return (
          <Box direction="row">
            { index > 0 && <Text>&nbsp;&gt;&nbsp;</Text> }
            { crumb.link 
              ? <Link to={crumb.link}><Anchor as="span">{crumb.tag}</Anchor></Link>
              : <Anchor as="span" style={{ textDecoration: "none", cursor: "default" }}>{crumb.tag}</Anchor>
            }
          </Box>
        )
      })}
    </Box>
  )
}

export default Breadcrumb;