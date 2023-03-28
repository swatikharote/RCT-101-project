import React from 'react';
import { border, Box, Flex, Input, Text, Image } from "@chakra-ui/react"



export const Navbar = () => {
    return (
        <Box style={{
            position: "fixed",
            height: "auto",
            width: "100%",

            border: "1px solid black"
        }} >
            {/* header top div */}
            <Flex justifyContent={"space-between"}>
                <Flex justifyContent={"space-around"} >
                    <Image src="https://cdn-icons-png.flaticon.com/512/882/882624.png" alt="name" width={"100px"} height />
                    <Input type={"search"} variant="outline" />
                </Flex>
                <Flex justifyContent={"space-around"}>
                    <Text>test</Text>
                    <Text>test</Text>
                    <Text>test</Text>
                </Flex>
            </Flex>
            {/* header bottom div */}



        </Box>
    )
}
