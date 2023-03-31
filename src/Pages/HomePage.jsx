import React from 'react'
import { Navbar } from './Navbar';
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react"
import { AllRoutes } from './AllRoutes';
import { Icon } from '@chakra-ui/react';
import { BsHeadphones, BsLaptop, BsPersonWorkspace } from "react-icons/bs"
import { GrMonitor, GrServer, GrServerCluster } from "react-icons/gr"
import '../App.css'
import WelcomeBack from '../components/WelcomeBack';
import Partition from '../components/Partition';
import DesktopNav from '../components/DesktopNav';

const styles = {
    iconSize: '30px'
}


const partitionDetails = [
    {
        img: './dual-lap.avif',
        position: 'left',
        details: {
            name: 'LATITUDE LAPTOPS',
            info: 'Bringing Work Closer to You',
            desc: 'The redesigned Latitude family offers new features that you can sense and that sense you.',
            shop: 'Shop Now'
        }
    },
    {
        img: './desktop-head.avif',
        position: 'right',
        details: {
            name: 'LATITUDE LAPTOPS',
            info: 'Bringing Work Closer to You',
            desc: 'The redesigned Latitude family offers new features that you can sense and that sense you.',
            shop: 'Shop Now'
        }
    },
    {
        img: './contact-img.png',
        position: 'right',
        details: {
            name: '',
            info: 'Dell Support',
            desc: 'Get your questions answered'
        }
    },
    {
        img: './mothi-image.avif',
        position: 'left',
        details: {
            name: 'LATITUDE LAPTOPS',
            info: 'Bringing Work Closer to You',
            desc: 'The redesigned Latitude family offers new features that you can sense and that sense you.',
            shop: 'Shop Now'
        }
    },
    {
        img: './cpu.avif',
        position: 'right',
        details: {
            name: 'PRECISION',
            info: 'More Power to Create.',
            desc: 'High-performance workstations built to handle intense creative applications.',
            shop: 'Shop Now'
        }
    }
]

function HomePage() {



    return (
        <Box>

            <Flex className='category-menu' justifyContent={"center"} gap={"80px"}>
                <Box>
                    <Icon as={BsLaptop} fontSize={styles.iconSize} />
                    <Text>Laptop</Text>
                </Box>
                <Box>
                    <Icon as={BsPersonWorkspace} fontSize={styles.iconSize} />
                    <Text>Desktop</Text>
                </Box>
                <Box>
                    <Icon as={GrServer} fontSize={styles.iconSize} />
                    <Text>Workstations</Text>
                </Box>
                <Box>
                    <Icon as={GrMonitor} fontSize={styles.iconSize} />
                    <Text>Monitors</Text>
                </Box>
                <Box>
                    <Icon as={GrServerCluster} fontSize={styles.iconSize} />
                    <Text>Servers & Storage</Text>
                </Box>
                <Box>
                    <Icon as={BsHeadphones} fontSize={styles.iconSize} />
                    <Text>Accessories</Text>
                </Box>
            </Flex>


            <Flex w={"100%"} h="auto">
                <Flex h="100%" flexDir={"column"} mt="12%" alignItems={"flex-start"} w={"50%"} p="0 30px">
                    <Text>EOFY SALE</Text>
                    <Heading>Work Without Limits.</Heading>
                    <Text>Get UPI / Net-Banking Discounts, goodie offers & more. ©</Text>
                    <Flex mt={"10px"} gap="20px">
                        <Button borderRadius={0} colorScheme='blue'>Shop Now</Button>
                        <Button borderRadius={0} variant='outline'>Learn More</Button>
                    </Flex>
                </Flex>
                <Box w={"50%"}>
                    <Image w={"100%"} src={"./dell-right.png"} />
                </Box>
            </Flex>

            <WelcomeBack />

            {partitionDetails?.map((item, i) => {
                return <Partition key={i} image={item.img} imgPosition={item.position} details={item.details} />
            })}







        </Box>
    )
}

export default HomePage