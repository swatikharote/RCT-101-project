import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import '../App.css'

function Partition({ image, imgPosition, details }) {

    const [position, setPosition] = useState("row")

    useEffect(() => {
        if (imgPosition == 'right') {
            setPosition("row-reverse")
        }
    }, [])

    return (
        <Flex w="100%" h="auto" alignItems="center" flexDirection={position} m="10px 0">
            <Image w={"50%"} src={image}></Image>
            <Box w={"100%"} p={3} textAlign="center">
                <Text>{details.name}</Text>
                <Text fontSize={"2rem"}>{details.info}</Text>
                <Text fontSize={"1.25rem"}>{details.desc}</Text>
                <Text fontSize={"1.25rem"} className='blue'>{details.shop}</Text>
            </Box>
        </Flex>
    )
}

export default Partition