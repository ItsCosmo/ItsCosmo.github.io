import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Image, Stack, Heading, Card, CardHeader, CardBody, Text } from 'grommet'

import { categories } from "../categories"

const RecipeMain = () => { 
    const navigate = useNavigate();

    return (
        <Box direction="column">
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
                { categories.map((category) => (
                  <Card height="275px" width="small" background="light-1" onClick={() => {navigate(`/recipe/${category.key}`)}}>
                    <CardHeader
                        color="white"
                        background={{ image: `url(/recipe/${category.image})`, color: category.background, size: "contain" }}
                        height="xsmall"
                    />
                    <CardBody
                        pad="small"
                    >
                        <Heading level={3}>{category.name}</Heading>
                        <Text>{category.description}</Text>
                    </CardBody>
                  </Card>
                ))}
            </Box>
        </Box>
    )
}

export default RecipeMain
