import { Box, Flex, Heading, Image, Text, Icon, position } from '@chakra-ui/react'
import React from 'react'
import { BsCurrencyRupee } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import '../App.css'

const style = {
    heading: {
        fontSize: '28px',
    }
}

function WelcomeBack() {
    return (
        <Box p="50px" className='gray'>
            <Text align={"left"} style={style.heading}>Welcome Back</Text>
            <Flex w={"100%"} gap={5} justifyContent="center">

                <Box textAlign={"left"} className='shadow-2' w={"30%"} bgColor={"#fff"} p="5">
                    <Text style={style.heading}>Best Seller</Text>
                    <hr />
                    <Flex mt={1} gap={2} justifyContent="flex-start" >
                        <Image src='./lattitue.avif' />
                        <Text textAlign={"left"} fontWeight={"medium"}>Enjoy special prices on our best selling laptops.</Text>
                    </Flex>
                    <Text className='blue' textAlign={"left"}>Shop Now</Text>
                </Box>

                <Box textAlign={"left"} className='shadow-2' w={"30%"} bgColor={"#fff"} p="5">
                    <Text style={style.heading}>Cart (3 items)</Text>
                    <hr />
                    <Flex mt={1} alignItems={"center"}>
                        <Icon style={style.heading} className="blue" as={BsCurrencyRupee}></Icon>
                        <Text style={style.heading} className="blue">141546</Text>
                    </Flex>
                    <Text textAlign={"left"} fontWeight={"medium"}>Cart (3 items)</Text>

                    <Text mt="50px" color={"#3182ce"} textAlign={"left"}>View Cart</Text>
                </Box>

                <Box textAlign={"left"} className='shadow-2' w={"30%"} bgColor={"#fff"} p="5">
                    <Text style={style.heading}>Access My Account</Text>
                    <hr />
                    <Text mt={1} fontWeight={"medium"}>Sign in to your account to track & view your orders</Text>
                    <Text style={{ position: "relative", top: '100px' }} color={"#3182ce"} textAlign={"left"}>Sign In</Text>
                </Box>
            </Flex>

        </Box>
    )
}

export default WelcomeBack