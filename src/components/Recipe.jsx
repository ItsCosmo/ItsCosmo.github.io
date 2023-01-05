import React from 'react'
import { useParams } from 'react-router-dom'
import { Box, Image, Heading, Text } from 'grommet'

import recipes from '../recipes/recipes'
import { minToString } from '../utils'
import Breadcrumb from './Breadcrumb'
import RecipeCategory from './RecipeCategory'

const Recipe = () => {
  const { category, num } = useParams()
  const recipe = recipes[category].recipes[num]
  const totalMinutes = recipe.time.prep + recipe.time.cook
  const totalTime = minToString(totalMinutes)

  const crumbs = [
    { tag: "Home", link: "/" },
    { tag: "Recipes", link: "/recipe" },
    { tag: recipes[category].name, link: `/recipe/${category}` },
    { tag: recipe.name }
  ]

  return (
    <Box direction="column">
        <Breadcrumb crumbs={crumbs} />
        <Heading level={2}>{recipe.name}</Heading>
        <Image src={`/recipe/${recipe.image}`} />
        <Heading level={4} margin={{ bottom: "small" }}>Cooking Time</Heading>
        <Box direction="row" justify="between">
          { recipe.time.prep > 0 && <Text>Preparation Time: {recipe.time.prep} min</Text> }
          { recipe.time.cook > 0 && <Text>Cook Time: { minToString(recipe.time.cook) }</Text> }
          <Text>Total Time: { minToString(totalMinutes) }</Text>
        </Box>
        <Heading level={4}>Ingredients</Heading>
        { recipe.ingredients.map((ingredient, index) => (
          <Box direction="row" key={index}>
            <Text>{ingredient.name}&nbsp;</Text>
            <Text color="grey"><i>{ingredient.amount}</i></Text>
          </Box>
        ))}
        <Heading level={4}>Directions</Heading>
        { recipe.directions.map((step, index) => (
            <Text margin={{ bottom: "xsmall"}} key={index}>{step}</Text>
        ))}
        { recipe.notes.length > 0 
          ? <Box pad="small" border="all" background="Cornsilk" margin={{ top: "small", bottom: "medium"}}>
            { recipe.notes.map((note, index) => (
              <Text color="#34282c" margin={{ top: "xsmall"}} key={index}><i>{note}</i></Text>
            ))}
          </Box>
          : <Box height="75px" />
        }
        <Text><i>contributed by: {recipe.contributor}</i></Text>
    </Box>
  )
}

export default Recipe
