import { Box, Flex, Heading, Image, Text, Button, Checkbox } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import '../App.css';
import axios from 'axios';



export const AllProduct = () => {


    const { isAuth, Login, name, searchData, updateSearchData, updateSearchStr, searchStr } = useContext(AuthContext);
    const [type, setType] = useState([])
    const [display, setDisplay] = useState([])
    const [rating, setRating] = useState([])
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)
    const limit = 4;

    const filterAPI = () => {
        axios.get(`https://cute-red-angelfish-tutu.cyclic.app/products?_limit=${limit}`, {
            params: {
                type: type,
                Display: display,
                rating: rating,
                _page: page
            }
        })
            .then((resp) => {
                console.log('searchData', searchData)
                console.log(resp)
                updateSearchData(resp.data)
                setTotalPage(searchData)
            })
    }

    useEffect(() => {
        // if (searchStr.trim() != "" || type || display) {
        filterAPI()
        // }

    }, [type, display, rating, page])

    if (searchData.length == 0) {
        return (
            <Box m={"auto"} h={"300px"} mt="100px">
                <Heading textAlign={"center"}>No record found</Heading>
            </Box>
        )
    }

    const handleChangeType = (target) => {
        if (target.checked) {
            setType([...type, target.name])
        } else {
            setType(type.filter(f => f != target.name))
        }
    }

    const handleChangeDisplay = (target) => {
        if (target.checked) {
            setDisplay([...display, target.name])
        } else {
            setDisplay(display.filter(f => f != target.name))
        }
    }
    const handleChangeRating = (target) => {
        if (target.checked) {
            setRating([...rating, target.name])
        } else {
            setRating(rating.filter(f => f != target.name))
        }
    }

    return (
        <Flex w={"100%"} justifyContent="space-around" pt="4">
            <Box w={"20%"} h="auto" >
                <Box m="3" bg="#f3f3f3" p="2">
                    <Text className='bold blue' fontSize={'md'} align="left" >Type</Text>
                    <Flex p="3" direction={"column"} gap="3">
                        <Checkbox name='home' onChange={(e) => handleChangeType(e.target)}>
                            <Text fontSize={'sm'} >Home</Text>
                        </Checkbox>
                        <Checkbox name='business' onChange={(e) => handleChangeType(e.target)}>
                            <Text fontSize={'sm'}>Business</Text>
                        </Checkbox>
                    </Flex>
                </Box>
                <Box m="3" bg="#f3f3f3" p="2">
                    <Text className='bold blue' fontSize={'md'} align="left" >Display</Text>
                    <Flex p="3" direction={"column"} gap="3">
                        <Checkbox name='35.5-cm. display HD (1366X768)' onChange={(e) => handleChangeDisplay(e.target)}>
                            <Text fontSize={'sm'} >35.5-cm. display HD</Text>
                        </Checkbox>
                        <Checkbox name='39.6-cm. display Full HD (1920X1080)' onChange={(e) => handleChangeDisplay(e.target)}>
                            <Text fontSize={'sm'}>39.6-cm. display Full HD </Text>
                        </Checkbox>

                    </Flex>
                </Box>
                <Box m="3" bg="#f3f3f3" p="2">
                    <Text className='bold blue' fontSize={'md'} align="left" >Rating</Text>
                    <Flex p="3" direction={"column"} gap="3">
                        <Checkbox name='4.0' onChange={(e) => handleChangeRating(e.target)}>
                            <Text fontSize={'sm'} >4.0</Text>
                        </Checkbox>
                        <Checkbox name='4.2' onChange={(e) => handleChangeRating(e.target)}>
                            <Text fontSize={'sm'}>4.2 </Text>
                        </Checkbox>
                        <Checkbox name='4.3' onChange={(e) => handleChangeRating(e.target)}>
                            <Text fontSize={'sm'}>4.3 </Text>
                        </Checkbox>

                    </Flex>
                </Box>

            </Box>


            <Box w={"75%"} h="auto" >
                {searchData?.map((item, i) => {
                    return (
                        <Flex w={"auto"} p={5} justifyContent="space-around" className='shadow-3' mt={"3"}>
                            <Box w={"25%"} p={1} >
                                <Image src={item.img} w="300px"></Image>
                            </Box>
                            <Box w={"35%"} p={2} textAlign="left" >
                                <Text>Name : {item.name}</Text>
                                <Text>Order Code : d560076win9s</Text>
                                <Text>Rating : {item.rating}</Text>
                                <Text fontWeight={"bold"}>Specs:    Customize</Text>
                                <Text>Processor :{item.Processor}</Text>

                                <Text> Display : {item.Display}</Text>
                                <Text fontSize={"xl"} fontStyle={"italic"}> Type:{item.type}</Text>
                            </Box>
                            <Box w={"35%"} p={2} textAlign="left" >
                                <Text fontWeight={"bold"} fontSize={"xl"} >Price : {item.price}</Text>
                                <Text>
                                    Price inclusive of GST. Free Delivery.</Text>
                                <Text className='bold blue sm'>  Estimated delivery date</Text>
                                <Text fontSize={"medium"}>  Special Offers                                        </Text>
                                <Text className='bold blue sm'>  + Get Alienware AW310H headset worth 37,999 at 99 or</Text>
                                <Text className='bold blue sm'>  Canon G3000 worth 317195 at 3999.</Text>
                                <Text className='bold blue sm'>  + No Cost EMI up to 24 Months</Text>
                                <Text className='bold' fontSize={"medium"}>  Dell Rewards Earn up to 25,000,</Text>
                                <Text className='bold' fontSize={"medium"}>  Financing</Text>
                                <Flex alignItems={"center"}> <Text className='bold blue sm'>  No cost EMI available.</Text>See options at checkout.</Flex>
                            </Box>
                        </Flex>
                    )
                })}

                <Box m={"3"}>
                    <Button isDisabled={page <= 1} onClick={() => setPage(page - 1)}>Prev</Button>
                    <Button isDisabled="true">{page}</Button>
                    <Button onClick={() => setPage(page + 1)}>Next</Button>
                </Box>
            </Box >


        </Flex >
    )
}
