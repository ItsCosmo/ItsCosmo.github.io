import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Heading, Card, CardHeader, CardBody, Text } from 'grommet'

import Breadcrumb from './Breadcrumb';
import { minToString } from '../utils';
import recipes from '../recipes/recipes';

const RecipeCategory = () => { 
  const navigate = useNavigate()
  const { category } = useParams()
  const crumbs = [
    { tag: "Home", link: "/" },
    { tag: "Recipes", link: "/recipe" },
    { tag: recipes[category].name }
  ]

  return (
    <Box direction="column" >
      <Breadcrumb crumbs={crumbs} />
      <Box direction="row" pad={{ top: "small" }} gap="xsmall" wrap={true}>
        { recipes[category].recipes.map((recipe, index) => (
          <Card 
            height="275px" 
            width="small" 
            background="light-1" 
            onClick={() => { navigate(`/recipe/${category}/${index}`)}} 
            key={index}
            margin={{ bottom: "small" }}
          >
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
