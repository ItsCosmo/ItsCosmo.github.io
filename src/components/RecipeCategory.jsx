import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Heading, Card, CardHeader, CardBody, Text } from 'grommet'

import Breadcrumb from './Breadcrumb';
import { minToString } from '../utils';
import categories from '../categories'
import recipes from '../recipes';

const RecipeCategory = () => { 
  const navigate = useNavigate()
  const { category } = useParams()
  const categoryName = categories.filter((value) => value.key === category)[0]["name"]
  const crumbs = [
    { tag: "Home", link: "/" },
    { tag: "Recipes", link: "/recipe" },
    { tag: categoryName }
  ]

  return (
    <Box direction="column" >
      <Breadcrumb crumbs={crumbs} />
      <Box direction="row" pad={{ top: "small" }} gap="xsmall">
        { recipes[category].map((recipe, index) => (
          <Card height="275px" width="small" background="light-1" onClick={() => { navigate(`/recipe/${category}/${index}`)}} >
            <CardHeader
                color="white"
                background={{ image: `url(/recipe/${recipe.image})`, color: "CornflowerBlue", size: "contain" }}
                height="xsmall"
            />
            <CardBody
                pad="small"
                justify="between"
            >
              <Heading level={4}>{recipe.name}</Heading>
              <Text size="small">Total time: {minToString(recipe.time.prep + recipe.time.cook)}</Text>
            </CardBody>
          </Card>
        ))}
      </Box>
    </Box>
  )
} 

export default RecipeCategory
