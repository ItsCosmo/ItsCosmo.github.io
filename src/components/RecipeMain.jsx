import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Image, Stack, Heading, Card, CardHeader, CardBody, Text } from 'grommet'

import recipes from "../recipes/recipes"

import Breadcrumb from './Breadcrumb'

const RecipeMain = () => { 
    const navigate = useNavigate();
    const crumbs = [
        { tag: "Home", link: "/" },
        { tag: "Recipes" }
    ]

    return (
        <Box direction="column">
            <Breadcrumb crumbs={crumbs}/>
            <Stack>
                <Image src="/recipe/cover-final.jpg" style={{ maxWidth: "100%" }}/>
                <Box pad="small" direction="column" justify="between" height="100%">
                    <Heading color="white" level={2} >Family Favorites</Heading>
                    <Text color="white">
                        Most of the recipes on this site are taken from <i>"Family Favorites"</i>, (c) 1999 Hazel Kleimeyer. Used by permission.
                    </Text>
                </Box>
            </Stack>
            <Box direction="row" pad={{ top: "small" }} gap="xsmall">
                { Object.keys(recipes).map((category, index) => (
                  <Card height="275px" width="small" background="light-1" onClick={() => {navigate(`/recipe/${recipes[category].key}`)}} key={index}>
                    <CardHeader
                        color="white"
                        background={{ image: `url(/recipe/${recipes[category].image})`, color: recipes[category].background, size: "contain" }}
                        height="xsmall"
                    />
                    <CardBody
                        pad="small"
                    >
                        <Heading level={3}>{recipes[category].name}</Heading>
                        <Text>{recipes[category].description}</Text>
                    </CardBody>
                  </Card>
                ))}
            </Box>
        </Box>
    )
}

export default RecipeMain
