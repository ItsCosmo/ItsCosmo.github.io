import React from 'react'
import { useParams } from 'react-router-dom'
import { Box, Image, Heading, Text } from 'grommet'
import categories from '../categories'
import recipes from '../recipes'
import { minToString } from '../utils'

import Breadcrumb from './Breadcrumb'
import RecipeCategory from './RecipeCategory'

const Recipe = () => {
  const { category, num } = useParams()
  const recipe = recipes[category][num]
  const totalMinutes = recipe.time.prep + recipe.time.cook
  const totalTime = minToString(totalMinutes)
  const categoryName = categories.filter((value) => value.key === category)[0]["name"]

  const crumbs = [
    { tag: "Home", link: "/" },
    { tag: "Recipes", link: "/recipe" },
    { tag: categoryName, link: `/recipe/${category}` },
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
        { recipe.ingredients.map((ingredient) => (
          <Box direction="row">
            <Text>{ingredient.name}&nbsp;</Text>
            <Text color="grey"><i>{ingredient.amount}</i></Text>
          </Box>
        ))}
        <Heading level={4}>Directions</Heading>
        { recipe.directions.map((step) => (
            <Text margin={{ bottom: "xsmall"}}>{step}</Text>
        ))}
        { recipe.notes.length > 0 
          ? <Box pad="small" border="all" background="Cornsilk" margin={{ top: "small", bottom: "medium"}}>
            { recipe.notes.map((note) => (
              <Text color="#34282c" margin={{ top: "xsmall"}}><i>{note}</i></Text>
            ))}
          </Box>
          : <Box height="75px" />
        }
        <Text><i>contributed by: {recipe.contributor}</i></Text>
    </Box>
  )
}

export default Recipe
