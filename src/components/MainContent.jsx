import React from 'react'
import { Heading, Card, CardHeader, CardFooter, CardBody, Button, Grid, Text, Box } from 'grommet'

const MainContent = () => (
    <Box direction="column">
        <Heading alignSelf="center" level={2}>Where shall we go today?</Heading>
        <Box align="center" justify="center" direction="row-responsive" gap="medium" pad="2rem">
            <Card  height="medium" width="small" background="light-1">
                <CardHeader
                    color="white"
                    background={{ image: "url(/recipe.svg)" }}
                    pad="medium"
                    height="xsmall"
                />
                <CardBody
                    pad="small"
                >
                    <Heading level={3}>Recipe Book</Heading>
                    <Text>All the best Kleimeyer family recipes in one place!</Text>
                </CardBody>
            </Card>
        </Box>
    </Box>
)

export default MainContent;
